import Footer from "./Footer";
import PageHead from "./PageHead";
import Title from "./Title";
import styles from "../styles/Home.module.css";

export default function Layout({ pageTitle, children }) {
  return (
    <div className={styles.container}>
      <PageHead title={pageTitle} />
      <main className={styles.main}>
        <Title />
        {children}
      </main>
      <Footer />
    </div>
  );
}
