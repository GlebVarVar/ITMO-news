import axios from 'axios';

import { useRouter } from 'next/router';
import { type FC, useState, useEffect } from 'react';

import { NewsCard, NewsCardSkeleton } from '@/components';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { newsAction } from '@/store/slices/newsSlice';

// Функция для предзагрузки данных на стороне сервера
// Не стали пихать пропсы к компонент Home, так как
// продадёт смысл в компоненте-заглушке для карточек
export const getStaticProps = async () => {
  const res = await axios.get(
    'https://news.itmo.ru/api/news/list/?ver=2.0&language_id=1&lead=1&per_page=9'
  );

  if (!res) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      news: res.data.news,
    },
  };
};

interface NewsListProps {
  style?: string;
  language: string;
}

const NewsList: FC<NewsListProps> = ({ style, language }) => {
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);
  const news = useAppSelector((state) => state.news.value);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setLoading(true);
    const fetchNews = async () => {
      const res = await axios.get(
        `https://news.itmo.ru/api/news/list/?ver=2.0&language_id=${
          language === 'rus' ? 1 : 2
        }&lead=1&per_page=9`
      );
      dispatch(newsAction.setNews(res.data.news));
      setLoading(false);
    };
    fetchNews();
  }, [language, dispatch]);

  return (
    <div className={null || style}>
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
  );
};

export { NewsList };
