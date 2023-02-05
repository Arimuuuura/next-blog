import Head from "next/head";
import Image from "next/image";
import styles from "@/components/layout.module.css";
import utilStyles from "@/styles/utils.module.css";
import Link from "next/link";

const name = "Arimuuuura";
export const siteTitle = "Arimuuuura Blog";

export const Layout = ({ home, children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              className={`${utilStyles.borderCircle} ${styles.headerHomeImage}`}
              alt="icon"
              src="/images/profile.png"
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <img
              className={utilStyles.borderCircle}
              alt="icon"
              src="/images/profile.png"
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">← ホームへ戻る</Link>
        </div>
      )}
    </div>
  );
};

export default Layout;
