import Card from "../components/Card/Card";
import ExternalLink from "../components/Utils/ExternalLink";
import Image from "next/image";
import PageHead from "../components/Utils/PageHead";
import styles from "../styles/Card.module.css";
import utilStyles from "../styles/Utils.module.css";

export default function AboutPage() {
  const profileSize = 144;
  return (
    <>
      <PageHead title="About" />
      <h1 className={styles.title}>About Us</h1>
      <div className={styles.grid}>
        <ExternalLink link="https://github.com/RetroHD">
          <Card title="OhItsRetro">
            <Image
              src="/profiles/retro-pfp.png"
              width={profileSize}
              height={profileSize}
              className={utilStyles.imageRound}
            />
            <p>
              Senior Moderator and Web Developer for Plexi Development.
              Currently in High School.
            </p>
          </Card>
        </ExternalLink>
        <ExternalLink link="https://github.com/KryskZ09">
          <Card title="KryskZ09">
            <Image
              src="/profiles/krysk-pfp.png"
              width={profileSize}
              height={profileSize}
              className={utilStyles.imageRound}
            />
            <p>
              Proficient User in Plexi Development. Apsiring Web/Software
              Developer in High School.
            </p>
          </Card>
        </ExternalLink>
      </div>
    </>
  );
}
