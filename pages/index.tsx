import Head from "next/head";

import { Nav } from "../app/components/common/Nav";
import { Footer } from "../app/components/common/Footer";
import { JobsPage } from "../app/components/jobs/JobsPage";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Health Explore</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <JobsPage />
      <Footer />
    </div>
  );
}
