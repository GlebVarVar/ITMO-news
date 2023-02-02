import { type FC } from 'react';

import { NewsItem } from '@/modules/NewsItem';

export const getServerSideProps = async (context) => {
  let { id } = context.params;
  id = parseInt(id);

  return {
    // return object with props id
    props: { id },
  };
};

interface NewsPageProps {
  id: number;
}

const NewsPage: FC<NewsPageProps> = ({ id }) => <NewsItem id={id} />;

export default NewsPage;
