import { type FC } from 'react';

import styles from '../assets/styles/NewsCard.module.scss';

const NewsCardSkeleton: FC = () => {
  return (
    <div className={styles.newsCardSkeleton}>
      <div className={styles.newsCardSkeleton__img}></div>
      <div className={styles.newsCardSkeleton__content}>
        <h4 className={styles.newsCardSkeleton__releaseDate}></h4>
        <p className={styles.newsCardSkeleton__text}></p>
      </div>
    </div>
  );
};

export default NewsCardSkeleton;
