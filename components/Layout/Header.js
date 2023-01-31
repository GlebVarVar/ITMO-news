import styles from '../../styles/Layout.module.scss';
import Image from 'next/image';

import { useSelector, useDispatch } from 'react-redux';
import { languageAction } from '../../store';

const Header = () => {
  const language = useSelector((state) => state.language.value);
  const dispatch = useDispatch();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Image
          className={styles.header__logo}
          width={160}
          height={16}
          src="logo.svg"
          alt="логотип университата ИТМО"
        />

        <div className={styles.header__languageDropdown}>
          <button className={styles.header__languageDropdown_selected}>
            <Image
              className={styles.header__languageDropdown_langImg}
              width={24}
              height={24}
              src={language === 'rus' ? 'Rus.svg' : 'Eng.svg'}
              alt={language === 'rus' ? 'Выбран Русский язык' : 'Выбран Английский язык'}
            />
            <p>{language === 'rus' ? 'Рус' : 'Eng'}</p>
            <Image
              className={styles.header__languageDropdown_chevron}
              width={12}
              height={12}
              src="Down.svg"
              alt="иконка раскрытия списка языков"
            />
          </button>
          <div className={styles.header__languageDropdown_content}>
            <button
              className={styles.header__languageDropdown_item}
              onClick={() => {
                dispatch(languageAction.changeLanguage('eng'));
              }}>
              <Image
                className={styles.header__languageDropdown_langImg}
                width={24}
                height={24}
                src="ENG.svg"
                alt="Выбрать Английский язык"
              />
              Eng
            </button>
            <button
              className={styles.header__languageDropdown_item}
              onClick={() => {
                dispatch(languageAction.changeLanguage('rus'));
              }}>
              <Image
                className={styles.header__languageDropdown_langImg}
                width={24}
                height={24}
                src="RUS.svg"
                alt="Выбрать Русский язык"
              />
              Рус
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
