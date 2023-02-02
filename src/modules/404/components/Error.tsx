import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import styles from '@/assets/styles/404.module.scss';

const Error = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 5000);
  }, [router]);

  return (
    <div className={styles.Content404}>
      <Image
        src='https://news.itmo.ru/xdata/_graphics/404.gif'
        alt='Страница не найдена'
        width={269}
        height={333}
      />
      <h1>СТРАНИЦА НЕ НАЙДЕНА!</h1>
      <h2>
        Возможно, запрашиваемая вами страница была перенесена или удалена.
      </h2>
    </div>
  );
};

export { Error };
