import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import utilStyles from "../styles/utils.module.css";
import styles from "./layout.module.css";

interface LayoutProps {
  children: ReactNode;
  home?: boolean;
}

export const siteTitle = "Martin Oxby | martinoxby.com";

const Layout = ({ children, home, ...props }: LayoutProps) => {
  return (
    <>
      <div {...props} className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="Martin Oxby | martinoxby.com" />
          <meta
            property="og:image"
            content="https://em-content.zobj.net/thumbs/320/apple/354/man-technologist_1f468-200d-1f4bb.png"
          />
          <title>{siteTitle}</title>
        </Head>
        <header className={styles.header}>
          {home ? (
            <>
              <Image
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={144}
                width={144}
                alt="Martin's profile picture"
              />
              <h1 className={utilStyles.heading2Xl}>
                Hi, I&apos;m <b>Martin</b> 👋
              </h1>
            </>
          ) : (
            <>
              <Link href="/">
                <a>
                  <Image
                    src="/images/profile.jpg"
                    className={utilStyles.borderCircle}
                    height={108}
                    width={108}
                    alt="Martin's profile picture"
                  />
                </a>
              </Link>
              <h2 className={utilStyles.headingLg}>
                <Link href="/">
                  Hi, I&apos;m <b>Martin</b> 👋
                </Link>
              </h2>
            </>
          )}
        </header>
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">← Back to home</Link>
          </div>
        )}
      </div>
      <footer className={styles.footer}>© 2024 🧑🏻‍💻</footer>
    </>
  );
};

export default Layout;
