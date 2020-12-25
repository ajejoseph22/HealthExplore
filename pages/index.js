import React from "react";
import Head from "next/head";
import Navbar from "../components/navbar";
import SearchBar from "../components/searchbar";
import Main from "../components/main";
import { apiUrl, emptyString } from "../util/constants";
import Footer from "../components/footer";

export const HomeContext = React.createContext({
  setFilter: () => {},
  setSortingOptions: () => {},
});

const Home = ({ jobs, appFilters }) => {
  const [query, setQuery] = React.useState(emptyString);
  const [filters, setFilters] = React.useState({});
  const [sortingOptions, setSortingOptions] = React.useState({});

  const handleSetQuery = (query) => {
    setQuery(query);
  };

  const handleSetFilters = (filtersObj) => {
    setFilters({ ...filters, ...filtersObj });
  };

  const handleSetSortingOptions = (sortingOptionsObj) => {
    setSortingOptions({ ...sortingOptions, ...sortingOptionsObj });
  };

  return (
    <HomeContext.Provider
      value={{
        appFilters,
        setFilter: (filterObj) => handleSetFilters(filterObj),
        setSortingOptions: (sortingOptionsObj) =>
          handleSetSortingOptions(sortingOptionsObj),
      }}
    >
      <div>
        <Head>
          <title>Health Explore</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar />
        <SearchBar
          setSorting={handleSetSortingOptions}
          setFilters={handleSetFilters}
          setQuery={handleSetQuery}
        />
        <Main
          sortingOptions={sortingOptions}
          filters={filters}
          query={query}
          jobs={jobs}
        />
        <Footer />
      </div>
    </HomeContext.Provider>
  );
};

Home.getInitialProps = async () => {
  const res = await Promise.all([
    fetch(`${apiUrl}/jobs`),
    fetch(`${apiUrl}/filters`),
  ]);
  const jobs = await res[0].json();
  const filters = await res[1].json();
  return {
    jobs,
    appFilters: filters,
  };
};

export default Home;
