import Head from 'next/head';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { ResponsiveContextProvider } from '../store/ResponsiveContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ResponsiveContextProvider>
      <Head>
        <title>PWV/PVA POC </title>
        <meta name="description" content="PVW/PVA POC"></meta>
        <meta
          name="viewport"
          content="initaial-scale=1.0, width=device-width"
        ></meta>
      </Head>
      <Component {...pageProps} />;
    </ResponsiveContextProvider>
  );
}

export default MyApp;
