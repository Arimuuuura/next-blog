import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Layout from "@/components/Layout";
import utilStyles from "@/styles/utils.module.css";
import { getPostsData } from "@/../lib/post.js";

// SSG の場合
export async function getStaticProps() {
  const allPostsData = getPostsData();
  console.log(allPostsData);

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <>
      <Layout>
        <section>
          <p className={utilStyles.headingMd}>
            私は、元航空自衛隊で現役ITエンジニアです。
          </p>
        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2>エンジニアのブログ</h2>
          <div className={styles.grid}>
            {allPostsData.map(({ id, title, date, thumbnail }, index) => (
              <article key={index}>
                <Link href={`/posts/${id}`}>
                  <img className={styles.thumbnailImage} src={thumbnail}></img>
                </Link>
                <Link href="/" className={utilStyles.boldText}>
                  {title}
                </Link>
                <br />
                <small className={utilStyles.lightText}>{date}</small>
              </article>
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
}
