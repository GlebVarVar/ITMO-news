import { type FC } from 'react';

import styles from '@/assets/styles/Home.module.scss';

import { NewsList } from '@/modules/NewsList';
import { useAppSelector } from '@/store/hooks';

const Home: FC = () => {
  const language = useAppSelector((state) => state.language.value);

  return (
    <main className={styles.content}>
      {/* сделал заголовок h3 исходя из макета.
        Мне кажется это дожен быть заголовок h1 */}
      <h3 className={styles.content__title}>
        {language === 'rus' ? 'Новости и события' : 'News & Events'}
      </h3>
      <NewsList style={styles.content__newsCards} language={language} />
    </main>
  );
};

export default Home;
