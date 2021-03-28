import Card from "../components/Card";
import Image from "next/image";
import PageHead from "../components/PageHead";
import styles from "../styles/Home.module.css";

export default function AboutPage() {
  return (
    <>
      <PageHead title="About" />
      <h1 className={styles.title}>About Us</h1>
      <div className={styles.grid}>
        <Card title="KryskZ09">
          <Image
            src="/krysk-pfp.png"
            width={144}
            height={144}
            className={styles.imageRound}
          />
          <p>
            Proficient User in Plexi Development. Apsiring Web/Software
            Developer in High School.
          </p>
        </Card>
        <Card title="OhItsRetro">
          <Image
            src="/retro-pfp.png"
            width={144}
            height={144}
            className={styles.imageRound}
          />
          <p>
            Senior Moderator and Web Developer for Plexi Development. Currently
            in High School.
          </p>
        </Card>
      </div>
    </>
  );
}
