import Image from 'next/image';
import { type FC } from 'react';


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
  const imgPath = country === 'rus' ? 'rus.svg' : 'eng.svg';
  return (
    <Image
      className={className}
      width={width || 24}
      height={height || 24}
      src={imgPath}
      alt={
        alt || `Выбрать ${country === 'rus' ? 'Русский' : 'Английский'} язык`
      }
    />
  );
};

export default CountryIcon;
