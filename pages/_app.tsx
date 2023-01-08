import type { AppProps } from "next/app";
import { useEffect } from "react";
import "/src/styles/styles.scss";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
