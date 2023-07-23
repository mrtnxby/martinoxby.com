import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto_Mono } from "next/font/google";

const font = Roboto_Mono({ subsets: ["latin"] });

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <main className={font.className}>
      <Component {...pageProps} />
    </main>
  );
};

export default App;
