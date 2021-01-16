import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js Practice</title>
      </Head>

      <main className={styles.main}>
        <h1>Next.js Practice</h1>
        <ul>
          <li className={styles.item}>
            <Link href="/articles">
              <a>Articles</a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="/uuid">
              <a>Get UUID</a>
            </Link>
          </li>
        </ul>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
