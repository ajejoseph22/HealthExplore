import { IJobListing } from "../../app/interfaces";
import { ISort } from "../../app/services/query";

export const applyFullSearch = (
  jobListings: IJobListing[],
  fullSearch: string
) => {
  if (!fullSearch) {
    return jobListings;
  }

  const fullSearchParts = fullSearch
    .split(" ")
    .map((part) => part.trim())
    .filter((part) => !!part)
    .map((part) => part.toLowerCase());

  return jobListings.filter((jobListing) => {
    return fullSearchParts.every(
      (part) =>
        jobListing.name.toLowerCase().includes(part) ||
        jobListing.job_title.toLowerCase().includes(part)
    );
  });
};

const sortByLocation = (
  jobListings: IJobListing[],
  direction: "ASC" | "DESC"
) => {
  const gtNumber = direction === "DESC" ? -1 : 1;
  const ltNumber = direction === "DESC" ? 1 : -1;

  return jobListings.sort((j1, j2) => {
    return j1.items[0].address > j2.items[0].address
      ? gtNumber
      : j1.items[0].address < j2.items[0].address
      ? ltNumber
      : 0;
  });
};

const sortByExperience = (
  jobListings: IJobListing[],
  direction: "ASC" | "DESC"
) => {
  const gtNumber = direction === "DESC" ? -1 : 1;
  const ltNumber = direction === "DESC" ? 1 : -1;

  const experienceLevels = {
    Internship: 0,
    Junior: 1,
    Intermediate: 2,
    Senior: 3,
  };

  for (const jobListing of jobListings) {
    jobListing.items = jobListing.items.sort((i1, i2) => {
      return experienceLevels[i1.experience] > experienceLevels[i2.experience]
        ? gtNumber
        : experienceLevels[i1.experience] < experienceLevels[i2.experience]
        ? ltNumber
        : 0;
    });
  }

  return jobListings;
};

export const applySorting = (jobListings: IJobListing[], sort: ISort) => {
  let sortedJobListings = [...jobListings];

  if (sort.location) {
    sortedJobListings = sortByLocation(sortedJobListings, sort.location);
  }

  if (sort.experience) {
    sortedJobListings = sortByExperience(sortedJobListings, sort.experience);
  }

  return sortedJobListings;
};
