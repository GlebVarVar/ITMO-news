import { FC } from 'react';
import Image from 'next/image';

type LogoProps = {
  className?: string;
  width?: number;
  height?: number;
};

const Logo: FC<LogoProps> = ({ className, width, height }) => {
  return (
    <Image
      className={className}
      height={height || 16}
      width={width || 162}
      src='logo.svg'
      alt='логотип университата ИТМО'
    />
  );
};

export default Logo;
