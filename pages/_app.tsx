import Head from 'next/head';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { ResponsiveContextProvider } from '../store/ResponsiveContext';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  fas,
  faBed,
  faBath,
} from '@fortawesome/free-solid-svg-icons';
library.add(fas, faBath, faBed);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ResponsiveContextProvider>
      <Head>
        <title>PWV/PVA POC </title>
        <meta name="description" content="PVW/PVA POC"></meta>
        <meta name="viewport" content="width=device-width"></meta>
      </Head>
      <Component {...pageProps} />;
    </ResponsiveContextProvider>
  );
}

export default MyApp;
