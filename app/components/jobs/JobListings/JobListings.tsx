import React from "react";
import { IJobListing, IJob } from "../../../interfaces";
import { formatNumberWithCommas } from "../../../services/formatters";
import { Jobs } from "./Jobs";
import { DownArrow } from "./DownArrow";
import { ISort } from "../../../services/query";
import { UpArrow } from "./UpArrow";

interface IJobListingProps {
  jobListing: IJobListing;
}
const JobListing = (props: IJobListingProps) => {
  const [showJobs, setShowJobs] = React.useState(false);

  return (
    <li className="py-2">
      <div
        className="pl-2  cursor-pointer"
        onClick={() => setShowJobs(!showJobs)}
      >
        <div className="flex items-center">
          <div
            className="bg-gray-300 text-white w-8 h-8 font-bold uppercase rounded-lg flex justify-center items-center mr-4"
            style={{ minWidth: "2rem" }}
          >
            {props.jobListing.name.substring(0, 2)}
          </div>
          <p className="text-gray-900 hover:underline cursor-pointer">
            {props.jobListing.total_jobs_in_hospital} jobs for{" "}
            {props.jobListing.name}
          </p>
        </div>
      </div>
      {showJobs && <Jobs jobs={props.jobListing.items} />}
    </li>
  );
};

const getNewSort = (sort: ISort, field: string) => {
  const newSort = { ...sort };

  if (!newSort[field]) {
    newSort[field] = "DESC";
  } else if (newSort[field] === "DESC") {
    newSort[field] = "ASC";
  } else if (newSort[field] === "ASC") {
    delete newSort[field];
  }

  return newSort;
};

interface ISortingProps {
  sort: ISort;
  onSortingChange: (sort: ISort) => void;
}
const Sorting = (props: ISortingProps) => {
  return (
    <div className="hidden md:flex">
      <p className="text-gray-500 pr-3">Sort by</p>
      <ul className="flex">
        <li
          className="px-3 hover:underline cursor-pointer flex items-baseline"
          onClick={() => {
            if (props.onSortingChange) {
              props.onSortingChange(getNewSort(props.sort, "location"));
            }
          }}
        >
          Location{" "}
          {props.sort.location === "DESC" && <DownArrow className="ml-2" />}
          {props.sort.location === "ASC" && <UpArrow className="ml-2" />}
        </li>
        <li className="px-3 hover:underline cursor-pointer">Role</li>
        <li className="px-3 hover:underline cursor-pointer">Department</li>
        <li className="px-3 hover:underline cursor-pointer">Education</li>
        <li
          className="px-3 hover:underline cursor-pointer flex items-baseline"
          onClick={() => {
            if (props.onSortingChange) {
              props.onSortingChange(getNewSort(props.sort, "experience"));
            }
          }}
        >
          Experience
          {props.sort.experience === "DESC" && <DownArrow className="ml-2" />}
          {props.sort.experience === "ASC" && <UpArrow className="ml-2" />}
        </li>
      </ul>
    </div>
  );
};

export interface IJobListingsProps {
  sort: ISort;
  onSortingChange: (sort: ISort) => void;
  jobListings: IJobListing[];
}
export const JobListings = (props: IJobListingsProps) => {
  const totalJobListings = props.jobListings.reduce(
    (prevVal, currVal) => prevVal + currVal.total_jobs_in_hospital,
    0
  );

  return (
    <div className="bg-white w-full px-4 py-8">
      <div className="flex justify-between">
        <div>
          <p className="text-sm"></p>
          <span className="font-semibold">
            {formatNumberWithCommas(totalJobListings)}
          </span>{" "}
          job postings
        </div>
        <Sorting sort={props.sort} onSortingChange={props.onSortingChange} />
      </div>
      <ul className="mt-8">
        {props.jobListings.map((jobListing) => (
          <JobListing jobListing={jobListing} />
        ))}
      </ul>
    </div>
  );
};
