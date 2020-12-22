import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
import SearchBar from "../components/searchbar";
import Main from "../components/main";
import { getAllJobs } from "../lib/jobs";

//////// CONTEXT /////////
export const HomeContext = React.createContext({
  setFilter: () => {},
});

const Home = (props) => {
  const [query, setQuery] = React.useState("");
  const [filters, setFilters] = React.useState({});

  const handleSetQuery = (query) => {
    setQuery(query);
  };

  const handleSetFilters = (filtersObj) => {
    setFilters({ ...filters, ...filtersObj });
  };

  return (
    <HomeContext.Provider
      value={{ setFilter: (filterObj) => handleSetFilters(filterObj) }}
    >
      <div>
        <Head>
          <title>Health Explore</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar />
        <SearchBar setFilters={handleSetFilters} setQuery={handleSetQuery} />
        <Main filters={filters} query={query} {...props} />
        <footer />
      </div>
    </HomeContext.Provider>
  );
};

// export async function getServerSideProps() {
//   const response = await fetch(`http://localhost:3000/api/jobs`);
//   const jobs = (await response.json()).result;
//   console.log("got here");
//   return {
//     props: {
//       jobs,
//     },
//   };
// }

export default Home;
