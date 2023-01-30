import Image from 'next/image';
import styles from '../styles/NewsCard.module.scss';

const NewsCard = ({ img, releaseDate, text }) => {
  releaseDate = new Date(releaseDate);
  releaseDate = releaseDate.toLocaleString('ru', {
    month: 'long',
    day: 'numeric',
  }) + ` ${releaseDate.getFullYear()}`;

  return (
    <div className={styles.newsCard}>
      {/* вариант 1 */}
      <div className={styles.newsCard__imgWrapper}>
        <Image className={styles.newsCard__img} src={img} fill alt="" />
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
