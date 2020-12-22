import jobs from "../../data/jobs.json";
import { getAllJobs } from "../../lib/jobs";

export function Jobs({ jobs, updatedJobs }) {
  const fetchedJobs = updatedJobs.length ? updatedJobs : jobs;
  return (
    <section className="w-full md:w-10/12 md:ml-2 bg-white py-4 px-4">
      <div className="flex justify-between mb-8 item-center">
        <h5>
          <span className="font-bold text-sm">{fetchedJobs.length}</span> job
          postings
        </h5>
        <ul className="hidden md:flexlist-none text-sm">
          <li className="text-gray-500 mx-3">Sort by</li>
          <li className="mx-3">Location</li>
          <li className="mx-3">Role</li>
          <li className="mx-3">Department</li>
          <li className="mx-3">Education</li>
          <li className="mx-3">Experience</li>
        </ul>
      </div>
      <div className="flex items-center">
        <p className="h-8 w-8 py-1 mr-4 flex justify-center rounded-lg text-white font-bold text-md bg-gray-400">
          MA
        </p>
        <span className="text-xs">8 jobs for Mammoth Hospital</span>
      </div>
    </section>
  );
}

export default Jobs;
