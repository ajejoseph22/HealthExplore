import React from "react";
import Jobs from "../jobs";
import LeftMenuBar from "../left-menu-bar";

const Main = ({ jobs, query, filters }) => {
  const [updatedJobs, setUpdatedJobs] = React.useState([]);
  React.useEffect(async () => {
    const response = await fetch(
      `http://localhost:3000/api/jobs?query=${query}&jobType=${encodeURI(
        filters.jobType || ""
      )}&workShift=${encodeURI(filters.workShift || "")}&experience=${encodeURI(
        filters.experience || ""
      )}&department=${encodeURI(filters.department || "")}`
    );
    setUpdatedJobs((await response.json()).result);
  }, [query, filters]);

  return (
    <main className="md:flex mt-6 w-full px-4">
      <LeftMenuBar />
      <Jobs jobs={jobs} updatedJobs={updatedJobs} />
    </main>
  );
};

export default Main;
