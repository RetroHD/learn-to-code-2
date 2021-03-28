import CardGrid from "../components/CardGrid";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Learn To Code | lmao.cx</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Learn To Code</h1>

        <p className={styles.description}>
          Someone sent you this because of one of the following reasons:
        </p>

        <ol className={styles.code}>
          <li>You want free code</li>
          <li>With each fix, more issues keep popping up</li>
          <li>
            You don't know the programming language you're attempting to use
          </li>
        </ol>

        <h2>That isn't a bad thing!</h2>

        <CardGrid />
      </main>

      <footer className={styles.footer}>
        <p>
          Created by <a href="https://github.com/RetroHD">OhItsRetro</a>
          <span className={styles.id}>#0501</span> (owns this amazing domain)
          and <a href="https://github.com/KryskZ09">KryskZ09</a>
          <span className={styles.id}>#7620</span> (developed this website)
        </p>
      </footer>
    </div>
  );
}
