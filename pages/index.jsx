import Home from "../components/Layout/Home";
import LearnButton from "../components/Layout/LearnButton";
import PageHead from "../components/Utils/PageHead";
import Title from "../components/Layout/Title";

export default function HomePage() {
  return (
    <>
      <PageHead title="Home" />
      <Title />
      <Home />
      <LearnButton />
    </>
  );
}
