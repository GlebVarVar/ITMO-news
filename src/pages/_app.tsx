import { Provider } from 'react-redux';

import Layout from '@/modules/Layout/index';

import '../assets/styles/index.scss';

import store from '@/store/index';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

export default MyApp;
