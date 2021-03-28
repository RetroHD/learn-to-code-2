import "../styles/globals.css";

import Layout from "../components/Layout";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [isDark, setDark] = useState(false);

  return (
    <Layout>
      <Component {...pageProps} />
      <style jsx global>{`
        body {
          background-color: ${isDark ? "#000" : "#fff"};
        }
      `}</style>
    </Layout>
  );
}

export default MyApp;
