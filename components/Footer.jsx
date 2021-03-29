import ExternalLink from "./ExternalLink";
import styles from "../styles/Home.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Created by{" "}
        <ExternalLink link="https://github.com/RetroHD">
          OhItsRetro
        </ExternalLink>
        <span className={styles.id}>#0501</span> and{" "}
        <ExternalLink link="https://github.com/KryskZ09">KryskZ09</ExternalLink>
        <span className={styles.id}>#7620</span>
      </p>
    </footer>
  );
}
