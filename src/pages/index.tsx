import Head from "next/head";
import styles from "@/styles/Home.module.css";
import utilStyles from "@/styles/utils.module.css";

import svgStyles from "@/styles/svgStyles.module.css";

import ThemeToggle from "@/components/ThemeToggle";
import Layout, { siteTitle } from "@/components/Layout";

export default function Home() {
  return (
    <Layout home>
      <ThemeToggle />
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
          I&apos;m a software engineer based in London, UK. Currently, I&apos;m
          helping energy companies become consumer companies at{" "}
          <a href="https://zoa.io">Zoa</a>.
        </p>
        <p>
          Previously, I worked at <a href="https://bulb.co.uk">Bulb</a>, a
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
            Components, Prisma, Jest, and more...
          </i>
        </p>
      </section>
      <div className={styles.buttonContainer}>
        <a className={styles.button} href="https://github.com/mrtnxby">
          <svg
            width="32"
            height="32"
            viewBox="0 0 98 96"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              className={svgStyles.logoStyling}
              d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
            />
          </svg>
        </a>
        <a
          className={styles.button}
          href="https://www.linkedin.com/in/martin-oxby/"
        >
          <svg
            fill="currentColor"
            width="32"
            height="32"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 310 310"
          >
            <g id="XMLID_801_">
              <path
                className={svgStyles.logoStyling}
                id="XMLID_802_"
                d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73C77.16,101.969,74.922,99.73,72.16,99.73z"
              />
              <path
                className={svgStyles.logoStyling}
                id="XMLID_803_"
                d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"
              />
              <path
                className={svgStyles.logoStyling}
                id="XMLID_804_"
                d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995C310,145.43,300.549,94.761,230.454,94.761z"
              />
            </g>
          </svg>
        </a>
        <a className={styles.button} href="mailto:martin@oxby.io">
          <svg
            fill="none"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className={svgStyles.logoStylingStroke}
              stroke="currentColor"
              d="M2 7L10.1649 12.7154C10.8261 13.1783 11.1567 13.4097 11.5163 13.4993C11.8339 13.5785 12.1661 13.5785 12.4837 13.4993C12.8433 13.4097 13.1739 13.1783 13.8351 12.7154L22 7M6.8 20H17.2C18.8802 20 19.7202 20 20.362 19.673C20.9265 19.3854 21.3854 18.9265 21.673 18.362C22 17.7202 22 16.8802 22 15.2V8.8C22 7.11984 22 6.27976 21.673 5.63803C21.3854 5.07354 20.9265 4.6146 20.362 4.32698C19.7202 4 18.8802 4 17.2 4H6.8C5.11984 4 4.27976 4 3.63803 4.32698C3.07354 4.6146 2.6146 5.07354 2.32698 5.63803C2 6.27976 2 7.11984 2 8.8V15.2C2 16.8802 2 17.7202 2.32698 18.362C2.6146 18.9265 3.07354 19.3854 3.63803 19.673C4.27976 20 5.11984 20 6.8 20Z"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </Layout>
  );
}
