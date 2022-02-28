import Head from "next/head";

import Banner from "../sections/Banner";
import Cta from "../sections/Cta";
import Features from "../sections/Features";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nstant Food Delivery | Home</title>
        <meta
          name="description"
          content="Enjoy the best your community has to offer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner />
      <Features />
      <Cta />
    </>
  );
}
