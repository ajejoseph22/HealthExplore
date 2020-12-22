import JobType from "../job-type";
import Department from "../department";
import WorkShift from "../work-shift";
import Experience from "../experience";

const LeftMenuBar = () => (
  <aside className="w-full md:w-2/12 mr-2">
    <JobType />
    <Department />
    <WorkShift />
    <Experience />
  </aside>
);

export default LeftMenuBar;
