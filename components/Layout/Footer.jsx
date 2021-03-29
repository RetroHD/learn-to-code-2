import ExternalLink from "../Utils/ExternalLink";
import styles from "../../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Created by{" "}
        <ExternalLink link="https://github.com/RetroHD">
          OhItsRetro
        </ExternalLink>
        <span className={styles.discordId}>#0501</span> and{" "}
        <ExternalLink link="https://github.com/KryskZ09">KryskZ09</ExternalLink>
        <span className={styles.discordId}>#7620</span>
      </p>
    </footer>
  );
}
