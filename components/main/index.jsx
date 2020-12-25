import React from "react";
import Jobs from "../jobs";
import LeftMenuBar from "../left-menu-bar";
import { apiUrl, emptyString } from "../../util/constants";
import axios from "axios";

const Main = ({ query, filters, sortingOptions, jobs }) => {
  const [updatedJobs, setUpdatedJobs] = React.useState();
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

  const isFirstRun = React.useRef(true);

  React.useEffect(async () => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }

    setIsLoading(true);

    try{
      const response = await axios.get(
          `${apiUrl}/jobs?query=${query}${getQueryStringOfFilters(
              filters
          )}${getQueryStringOfSortingOptions(sortingOptions)}`
      );
      setUpdatedJobs(response.data);
      setIsLoading(false);
    }catch(e){
      console.error(e)
    }
  }, [query, filters, sortingOptions]);

  return (
    <main className="md:flex mt-6 w-full px-4">
      <LeftMenuBar />
      <Jobs isLoading={isLoading} jobs={updatedJobs || jobs} />
    </main>
  );
};

export default Main;
