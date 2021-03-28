import styles from "../styles/Home.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Created by <a href="https://github.com/RetroHD">OhItsRetro</a>
        <span className={styles.id}>#0501</span> and{" "}
        <a href="https://github.com/KryskZ09">KryskZ09</a>
        <span className={styles.id}>#7620</span>
      </p>
    </footer>
  );
}
