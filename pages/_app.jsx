import "../styles/globals.css";

import Layout from "../components/Layout/Layout";
import { useState } from "react";

function LearnToCodeApp({ Component, pageProps }) {
  // TODO: Implement theme switching
  const [isDark, setDark] = useState(false);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default LearnToCodeApp;
