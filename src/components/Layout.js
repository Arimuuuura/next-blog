import Head from "next/head";
import Image from "next/image";
import styles from "@/components/layout.module.css";
import utilStyles from "@/styles/utils.module.css";

const name = "Arimuuuura";

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <img
          className={utilStyles.borderCircle}
          alt="icon"
          src="/images/profile.png"
        />
        <h1 className={utilStyles.heading2Xl}>{name}</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
