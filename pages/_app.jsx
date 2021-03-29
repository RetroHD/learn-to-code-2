import "../styles/globals.css";

import Layout from "../components/Layout";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  // TODO: Implement theme switching
  const [isDark, setDark] = useState(false);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
