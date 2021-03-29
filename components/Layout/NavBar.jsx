import { Hash } from "react-feather";
import Link from "next/link";
import styles from "../../styles/NavBar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.navContainer}>
      <ul>
        <li>
          <Link href="/">
            <a>
              <Hash />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/learn">
            <a>Learn</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
