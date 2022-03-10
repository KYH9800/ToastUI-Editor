// pages/_app.js
import AppLayout from '../components/AppLayout';

const MyApp = ({ Component, pageProps }) => {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
};

export default MyApp;
