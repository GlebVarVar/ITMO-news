import styles from '../../assets/styles/Layout/Layout.module.scss';

import SelectedLanguage from './components/SelectedLanguage';
import ChooseLanguageDropdownItem from './components/ChooseLanguageDropdownItem';
import Logo from '../../UI/Logo';
import Link from 'next/link';
const Header = () => {
  const languages = [
    { id: 1, lang: 'eng' },
    { id: 2, lang: 'rus' },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href='/'>
          <Logo className={styles.header__logo} />
        </Link>
        <div className={styles.header__languageDropdown}>
          <SelectedLanguage />
          <div className={styles.header__languageDropdown_content}>
            {languages.map(({ id, lang }) => (
              <ChooseLanguageDropdownItem key={id} language={lang} />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
