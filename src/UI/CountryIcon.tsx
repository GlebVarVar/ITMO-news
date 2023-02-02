import Image from 'next/image';
import { type FC } from 'react';

import EngImg from '../assets/img/eng.svg';
import RusImg from '../assets/img/rus.svg';

interface CountryIconProps {
  country: string;
  className?: string;
  width?: number;
  height?: number;
  alt?: string;
}

const CountryIcon: FC<CountryIconProps> = ({
  country,
  className,
  width,
  height,
  alt,
}) => {
  return (
    <Image
      className={className}
      width={width || 24}
      height={height || 24}
      src={country === 'rus' ? RusImg : EngImg}
      alt={
        alt || `Выбрать ${country === 'rus' ? 'Русский' : 'Английский'} язык`
      }
    />
  );
};

export default CountryIcon;
