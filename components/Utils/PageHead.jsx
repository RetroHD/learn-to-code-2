import Head from "next/head";

export default function PageHead({ title }) {
  return (
    <Head>
      <title>{`${title} | lmao.cx`}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:title" content="Learn To Code" />
      <meta
        property="og:description"
        content="You probably don't know how to code..."
      />
    </Head>
  );
}
