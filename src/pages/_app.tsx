import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto_Mono } from "next/font/google";
// If loading a variable font, you don't need to specify the font weight
const roboto = Roboto_Mono({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  );
}
