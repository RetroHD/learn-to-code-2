import CardGrid from "../components/CardGrid";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
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
    </>
  );
}
