import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import styles from "@/styles/Home.module.css";
import Layout, { siteTitle } from "@/components/layout";
import utilStyles from "@/styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <meta
          name="description"
          content="A personal website to show what I do 🧑🏻‍💻"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi, I&apos;m <b>Martin</b> 👋
        </p>
        <p>
          I&apos;m a software engineer based in London, UK. Currently I&apos;m
          helping households electrify at <a href="https://zoa.io">zoa.io</a>.
        </p>
        <p>
          Previously I worked at <a href="https://bulb.co.uk">Bulb</a>, a
          renewable energy supplier with a mission to lower bills and reduce CO
          <sub>2</sub>.
        </p>
        <p>
          I began my career in QA and learned to code at work and in my spare
          time, supported by my friends and colleagues.
        </p>
        <p>I&apos;ve been professionally coding since Feb 2022.</p>
        <p>
          <b>I work with</b>:{" "}
          <i>
            React, JavaScript/TypeScript, Node.js, Next.js, HTML5, CSS, Styled
            Components, GraphQL and more...
          </i>
        </p>
        <h3>
          {" "}
          <Link href="/contact">Contact</Link>
        </h3>
      </section>
      <div className={styles.buttonContainer}>
        <a className={styles.button} href="https://github.com/mrtnxby">
          {" "}
          <Image
            priority
            src="/icons/github.svg"
            height={32}
            width={32}
            alt="Github"
          />
        </a>
        <a
          className={styles.button}
          href="https://www.linkedin.com/in/martin-oxby/"
        >
          {" "}
          <Image
            priority
            src="/icons/linkedin.svg"
            height={32}
            width={32}
            alt="LinkedIn"
          />
        </a>
        <a className={styles.button} href="mailto:martin@oxby.io">
          {" "}
          <Image
            priority
            src="/icons/email.svg"
            height={32}
            width={32}
            alt="Email"
          />
        </a>
      </div>
    </Layout>
  );
}
