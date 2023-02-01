import Image from 'next/image';

import { type FC } from 'react';

import styles from '../assets/styles/NewsCard.module.scss';

interface NewsCardProps {
  img: string;
  releaseDate: string;
  text: string;
  onClick: () => void;
}

const NewsCard: FC<NewsCardProps> = ({ img, releaseDate, text, onClick }) => {
  // Преобразование строки в дату
  const releaseDateConverted: Date = new Date(releaseDate);
  // Преобразование даты в строку
  releaseDate =
    releaseDateConverted.toLocaleString('ru', {
      month: 'long',
      day: 'numeric',
    }) + ` ${releaseDateConverted.getFullYear()}`;

  return (
    <div className={styles.newsCard} onClick={onClick}>
      {/* вариант 1 */}
      <div className={styles.newsCard__imgWrapper}>
        <Image className={styles.newsCard__img} src={img} fill alt='' />
      </div>
      {/* вариант 2 */}
      {/* <div className={styles.newsCard__img_v2}></div> */}
      <div className={styles.newsCard__content}>
        <h4 className={styles.newsCard__releaseDate}>{releaseDate}</h4>
        <p className={styles.newsCard__text}>{text}</p>
      </div>
    </div>
  );
};

export default NewsCard;
