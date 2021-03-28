import styles from "../styles/Home.module.css";

export default function Card({ title, children }) {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <ul>{children}</ul>
    </div>
  );
}
