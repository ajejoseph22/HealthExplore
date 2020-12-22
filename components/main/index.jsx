import React from "react";
import JobType from "../job-type";
import Jobs from "../jobs";

const Main = ({ jobs, query }) => {
  const [updatedJobs, setUpdatedJobs] = React.useState([]);
  React.useEffect(async () => {
    const response = await fetch(
      `http://localhost:3000/api/jobs?query=${query}`
    );
    setUpdatedJobs((await response.json()).result);
  }, [query]);

  return (
    <main className="md:flex mt-6 w-full px-4">
      <JobType />
      <Jobs jobs={jobs} updatedJobs={updatedJobs} />
    </main>
  );
};

export default Main;
