import Footer from "./Footer";
import NavBar from "./NavBar";
import styles from "../styles/Home.module.css";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
    </>
  );
}
