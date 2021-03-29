import { ChevronRight } from "react-feather";
import Link from "next/link";
import styles from "../../styles/LearnButton.module.css";

export default function LearnButton() {
  return (
    <Link href="/learn">
      <a className={styles.learnButton}>
        <h1>Begin Learning</h1>
        <ChevronRight size={64} className={styles.arrow} />
      </a>
    </Link>
  );
}
