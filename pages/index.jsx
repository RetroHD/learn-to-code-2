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

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Learn JavaScript</h3>
            <ul>
              <li>
                <a href="https://www.codecademy.com/learn/javascript">
                  CodeCademy
                </a>
              </li>
              <li>
                <a href="http://eloquentjavascript.net">Free JavaScript Book</a>
              </li>
              <li>
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction">
                  JavaScript Documentation
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.card}>
            <h3>Learn Node.js</h3>
            <ul>
              <li>
                <a href="https://nodeschool.io/">NodeSchool</a>
              </li>
              <li>
                <a href="https://www.codeschool.com/courses/real-time-web-with-node-js">
                  CodeSchool
                </a>
              </li>
              <li>
                <a href="https://nodejs.org/en/docs/">Node.js Documentation</a>
              </li>
            </ul>
          </div>
          <div className={styles.card}>
            <h3>Learn Discord.js</h3>
            <ul>
              <li>
                <a href="https://discordjs.guide/">Discord.js Guide</a>
              </li>
              <li>
                <a href="https://discord.js.org/#/docs/main/stable/general/welcome">
                  Discord.js Documentation
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.card}>
            <h3>Don't Feel Bad!</h3>
            <p>We all start somewhere, take your time and practice!</p>
          </div>
        </div>
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