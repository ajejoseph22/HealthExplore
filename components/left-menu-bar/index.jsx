import JobType from "../job-type";
import Department from "../department";
import WorkShift from "../work-shift";
import Experience from "../experience";

const LeftMenuBar = () => (
  <aside className="hidden left-menu-bar w-0 md:w-3/12 mr-2 md:block">
    <JobType />
    <Department />
    <WorkShift />
    <Experience />
  </aside>
);

export default LeftMenuBar;
