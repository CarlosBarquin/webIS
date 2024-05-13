import "@/styles/globals.css";
import type { AppProps } from "next/app";
import StyledComponentsRegistry from '../lib/registry';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StyledComponentsRegistry>
      <Component {...pageProps} />
    </StyledComponentsRegistry>
  );
  

}
