import Layout from '../components/Layout';
import '../styles/index.scss';
import { Provider } from "react-redux";
import store from "../store/index";

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
