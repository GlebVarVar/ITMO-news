import { type FC } from 'react';

import styles from '@/assets/styles/Layout/Layout.module.scss';
import { useAppDispatch } from '@/store/hooks';
import { languageAction } from '@/store/slices/languageSlice';
import CountryIcon from '@/UI/CountryIcon';

interface ChooseLanguageDropdownItemProps {
  language: string;
}

const ChooseLanguageDropdownItem: FC<ChooseLanguageDropdownItemProps> = ({
  language,
}) => {
  const dispatch = useAppDispatch();

  return (
    <button
      className={styles.header__languageDropdown_item}
      onClick={() => {
        dispatch(languageAction.changeLanguage(language));
      }}
    >
      <CountryIcon
        country={language}
        className={styles.header__languageDropdown_langImg}
      />
      {language === 'rus' ? 'Рус' : 'Eng'}
    </button>
  );
};

export default ChooseLanguageDropdownItem;
