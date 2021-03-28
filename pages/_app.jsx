import "../styles/globals.css";

import ThemeButton from "../components/ThemeButton";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [isDark, setDark] = useState(false);

  return (
    <>
      <ThemeButton setDark={setDark} isDark={isDark} />
      <Component {...pageProps} />
      <style jsx global>{`
        body {
          background-color: ${isDark ? "#000" : "#fff"};
        }
      `}</style>
    </>
  );
}

export default MyApp;
