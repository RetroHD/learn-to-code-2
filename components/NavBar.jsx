import Link from "next/link";
import Title from "./Title";

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/learn">
            <a>Learn</a>
          </Link>
        </li>
        <li>
          <a href="https://rickrolled.com/">About</a>
        </li>
      </ul>
    </nav>
  );
}
