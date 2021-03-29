import PageHead from "../Utils/PageHead";
import utilStyles from "../../styles/Utils.module.css";

export default function Home() {
  return (
    <>
      <PageHead title="Home" />
      <div className={utilStyles.code}>
        <ol>
          <li>You want free code</li>
          <li>With each fix, more issues keep popping up</li>
          <li>
            You don't know the programming language you're attempting to use
          </li>
        </ol>
      </div>
      <h2>This isn't a bad thing!</h2>
    </>
  );
}
