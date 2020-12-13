import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { SearchInput } from "./SearchInput";
import { RootState } from "../../store";

import {
  getFilters,
  getJobListings,
  selectors as jobsSelectors,
} from "../../slices/jobsSlice";
import { JobListings } from "./JobListings/JobListings";
import { Filters } from "./Filters";
import { ExecuteOnce } from "../../services/throttle";

const executeOnce = new ExecuteOnce();
const DELAY_MS = 500;

type PropsFromRedux = ConnectedProps<typeof connector>;
export type IJobsPageProps = PropsFromRedux & {};
const _JobsPage = (props: IJobsPageProps) => {
  React.useEffect(() => {
    props.getFilters();
    props.getJobListings();
  }, []);
  const [fullSearch, setFullSearch] = React.useState("");
  const [sort, setSort] = React.useState({});

  return (
    <div className="sm:px-5 sm:py-5 bg-gray-100">
      <SearchInput
        placeholder="Search for any job, title, keyword or company"
        onChange={(event) => {
          setFullSearch(event.target.value);
          executeOnce.execute(() => {
            props.getJobListings({
              filter: { fullSearch: event.target.value },
              sort,
            });
          }, DELAY_MS);
        }}
      />
      <div className="flex sm:py-4">
        <Filters filters={props.filters} />
        <JobListings
          sort={sort}
          onSortingChange={(sort) => {
            setSort(sort);
            executeOnce.execute(() => {
              props.getJobListings({ filter: { fullSearch }, sort });
            }, DELAY_MS);
          }}
          jobListings={props.jobListings}
        />
      </div>
    </div>
  );
};

const connector = connect(
  (state: RootState) => ({
    loading: jobsSelectors.selectLoading(state),
    filters: jobsSelectors.selectFilters(state),
    jobListings: jobsSelectors.selectJobListings(state),
    error: jobsSelectors.selectError(state),
  }),
  {
    getFilters,
    getJobListings,
  }
);

export const JobsPage = connector(_JobsPage);
