import { FC } from 'react';
import Image from 'next/image';

type ChevronProps = {
  className?: string;
  width?: number;
  height?: number;
  alt?: string;
  rotate?: 'up' | 'down' | 'left' | 'right';
};

const Chevron: FC<ChevronProps> = ({
  className,
  width,
  height,
  alt,
  rotate,
}) => {
  let deg: string = '';
  switch (rotate) {
    case 'up':
      deg = '180';
      break;
    case 'down':
      deg = '0';
      break;
    case 'left':
      deg = '90';
      break;
    case 'right':
      deg = '270';
  }
  deg += 'deg';

  return (
    <Image
      className={className}
      width={12}
      height={12}
      src='Down.svg'
      style={{ transform: `rotate(${deg})` }}
      alt='иконка раскрытия списка языков'
    />
  );
};

export default Chevron;
