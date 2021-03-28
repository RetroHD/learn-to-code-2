import CardGrid from "../components/CardGrid";
import Footer from "../components/Footer";
import PageHead from "../components/PageHead";
import Title from "../components/Title";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <PageHead title="Learn To Code | lmao.cx" />

      <main className={styles.main}>
        <Title />

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

      <Footer />
    </div>
  );
}
