import axios from 'axios';
import Image from 'next/image';
import { type FC, useState, useEffect } from 'react';

import styles from '../assets/styles/NewsItem.module.scss';
import { useAppSelector, useAppDispatch } from '../store/hooks';

import { newsAction } from '../store/slices/newsSlice';

import type { news } from '../store/slices/newsSlice';

export const getServerSideProps = async (context) => {
  const { id } = context.params;

  return {
    // return object with props id
    props: { id },
  };
};

interface NewsPageProps {
  id: number;
}

const NewsPage: FC<NewsPageProps> = ({ id }) => {
  const dispatch = useAppDispatch();
  const [newsItem, setNewsItem] = useState<news>();

  const newsList = useAppSelector((state) => state.news.value);
  const language = useAppSelector((state) => state.language.value);

  useEffect(() => {
    if (newsList.length === 0) {
      const fetchNews = async () => {
        const res = await axios.get(
          `https://news.itmo.ru/api/news/list/?ver=2.0&language_id=${
            language === 'rus' ? 1 : 2
          }&lead=1&per_page=9`
        );
        dispatch(newsAction.setNews(res.data.news));

        setNewsItem(res.data.news.find((item) => item.id == id));
      };
      fetchNews();
    } else {
      setNewsItem(newsList.find((item) => item.id == id));
    }
  }, []);

  return (
    <>
      {newsItem != null ? (
        <section className={styles.newsPageSection}>
          <p className={styles.newsPageSection__date}>
            {newsItem.creation_date}
          </p>
          <p className={styles.newsPageSection__category}>
            {newsItem.parent_category.category_title}
          </p>
          <h1 className={styles.newsPageSection__title}>{newsItem.title}</h1>
          <Image
            className={styles.newsPageSection__img}
            src={newsItem.image_big}
            width={500}
            height={500}
            alt='Тест'
          ></Image>
        </section>
      ) : (
        <p>Загрузка...</p>
      )}
    </>
  );
};

export default NewsPage;
