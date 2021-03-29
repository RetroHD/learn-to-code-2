import Head from "next/head";

export default function PageHead({ title }) {
  return (
    <Head>
      <title>{`${title} | lmao.cx`}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
