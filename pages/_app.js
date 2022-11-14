//pages & components
import Layout from '../components/Layout';
//tools
//styles
import GlobalStyle from '../components/GlobalStyle';
import '../styles/globals.css';

function MyApp({ Component, pageProps: { ...pageProps } }) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
export default MyApp;
