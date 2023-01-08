import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import './styles.scss';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <Component {...pageProps} />
  );
}
