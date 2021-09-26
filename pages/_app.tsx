import "../styles/globals.css";
import "@fontsource/inter/variable.css";
import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default App;
