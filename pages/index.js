import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
import SearchBar from "../components/searchbar";
import Main from "../components/main";
import { getAllJobs } from "../lib/jobs";

export async function getServerSideProps() {
  const response = await fetch(`http://localhost:3000/api/jobs`);
  const jobs = (await response.json()).result;

  return {
    props: {
      jobs,
    },
  };
}

export default function Home(props) {
  const [query, setQuery] = React.useState("");
  React.useEffect(() => {
    console.log("changed", query);
  }, [query]);
  const handleSetQuery = (query) => {
    setQuery(query);
  };
  return (
    <div>
      <Head>
        <title>Health Explore</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <SearchBar setQuery={handleSetQuery} />
      <Main query={query} {...props} />
      <footer></footer>
    </div>
  );
}
