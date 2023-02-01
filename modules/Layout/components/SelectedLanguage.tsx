import { type FC } from 'react';

import styles from '../../../assets/styles/Layout/Layout.module.scss';
import { useAppSelector } from '../../../store/hooks';
import Chevron from '../../../UI/Chevron';
import CountryIcon from '../../../UI/CountryIcon';

const SelectedLanguage: FC = () => {
  const language = useAppSelector((state) => state.language.value);

  return (
    <button className={styles.header__languageDropdown_selected}>
      <CountryIcon
        country={language}
        className={styles.header__languageDropdown_langImg}
        alt={
          language === 'rus' ? 'Выбран Русский язык' : 'Выбран Английский язык'
        }
      />
      <p>{language === 'rus' ? 'Рус' : 'Eng'}</p>
      <Chevron className={styles.header__languageDropdown_chevron} />
    </button>
  );
};

export default SelectedLanguage;
