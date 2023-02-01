import styles from '../assets/styles/Home.module.scss';
import NewsCard from '../components/NewsCard';
import NewsCardSkeleton from '../components/NewsCardSkeleton';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { newsAction } from '../store/slices/newsSlice';

const Home = () => {
  const language = useAppSelector((state) => state.language.value);
  const news = useAppSelector((state) => state.news.value);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchNews = async () => {
      const res = await axios.get(
        `https://news.itmo.ru/api/news/list/?ver=2.0&language_id=${
          language === 'rus' ? 1 : 2
        }&lead=1&per_page=9`
      );
      dispatch(newsAction.setNews(res.data.news));
      console.log(res.data.news);
      setLoading(false);
    };
    fetchNews();
  }, [language, dispatch]);

  return (
    <>
      <main className={styles.content}>
        {/* сделал заголовок h3 исходя из макета.
        Мне кажется это дожен быть заголовок h1 */}
        <h3 className={styles.content__title}>
          {language === 'rus' ? 'Новости и события' : 'News & Events'}
        </h3>
        <div className={styles.content__newsCards}>
          {!isLoading
            ? news.map(({ id, title, image_big, creation_date }) => (
                <NewsCard
                  key={id}
                  text={title}
                  img={image_big}
                  releaseDate={creation_date}
                  onClick={() => {
                    router.push(`/${id}`);
                  }}
                ></NewsCard>
              ))
            : // create fake array with length 6
              [...Array(6)].map((id, index) => (
                <NewsCardSkeleton key={index}></NewsCardSkeleton>
              ))}
        </div>
      </main>
    </>
  );
};

export default Home;
