// pages/_app.js
import Head from 'next/head';
// import PropTypes from 'prop-types';
import wrapper from '../store/createStore';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>NodeBird</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

// MyApp.propTypes = {
//   Component: PropTypes.elementType.isRequired,
// };

export default wrapper.withRedux(MyApp);
