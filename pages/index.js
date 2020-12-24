import React from "react";
import Head from "next/head";
import Navbar from "../components/navbar";
import SearchBar from "../components/searchbar";
import Main from "../components/main";
import { emptyString } from "../util/constants";

export const HomeContext = React.createContext({
  setFilter: () => {},
  setSortingOptions: () => {},
});

const Home = (props) => {
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
          {...props}
        />
        <footer />
      </div>
    </HomeContext.Provider>
  );
};

export default Home;
