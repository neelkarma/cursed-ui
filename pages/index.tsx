import type { NextPage } from "next";
import Head from "../components/head";
import BaseLayout from "../components/baselayout";

const Home: NextPage = () => {
  return (
    <BaseLayout>
      <Head title="Home | Cursed UI" />
      <h1 className="font-sans text-4xl font-bold pb-3">Cursed UI</h1>
      <p className="pb-3">
        A collection of cursed UI components that I (a back-of-the-front-end dev
        that almost exclusively uses css frameworks) made...{" "}
        <em>from scratch</em>.
      </p>
      <p className="pb-3">Hopefully they&apos;re alright.</p>
    </BaseLayout>
  );
};

export default Home;
