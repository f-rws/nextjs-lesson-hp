import Head from 'next/head';
import Link from 'next/link';
import styles from './Layout.module.scss';
import Image from 'next/image';

export default function Layout({ children, title = 'HP by next.js' }) {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <nav className={styles.nav}>
          <div className={styles.linksWrapper}>
            <div className={styles.links}>
              <Link href="/">
                <a className={styles.link}>Home</a>
              </Link>
              <Link href={'/blog-page'}>
                <a className={styles.link}>Blog</a>
              </Link>
              <Link href={'/contact-page'}>
                <a className={styles.link}>Contact</a>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main className={styles.wrapperChildren}>{children}</main>
      <footer className={styles.footer}>
        <a
          className={styles.footerLink}
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
