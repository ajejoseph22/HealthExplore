import React from "react";
import Jobs from "../jobs";
import LeftMenuBar from "../left-menu-bar";
import { emptyString } from "../../util/constants";

const Main = ({ query, filters, sortingOptions }) => {
  const [updatedJobs, setUpdatedJobs] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const getQueryStringOfFilters = (filters) => {
    return Object.keys(filters).reduce((acc, item) => {
      acc += `&${item}=${encodeURI(filters[item])}`;
      return acc;
    }, emptyString);
  };

  const getQueryStringOfSortingOptions = (sortingOptions) => {
    return Object.keys(sortingOptions).reduce((acc, item) => {
      acc += `&${item}Sort=${encodeURI(sortingOptions[item])}`;
      return acc;
    }, emptyString);
  };

  React.useEffect(async () => {
    setIsLoading(true);
    const response = await fetch(
      `http://localhost:3000/api/jobs?query=${query}${getQueryStringOfFilters(
        filters
      )}${getQueryStringOfSortingOptions(sortingOptions)}`
    );
    setUpdatedJobs((await response.json()).result);
    setIsLoading(false);
  }, [query, filters, sortingOptions]);

  return (
    <main className="md:flex mt-6 w-full px-4">
      <LeftMenuBar />
      <Jobs isLoading={isLoading} updatedJobs={updatedJobs} />
    </main>
  );
};

export default Main;
