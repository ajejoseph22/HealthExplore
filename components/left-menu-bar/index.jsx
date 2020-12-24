import JobType from "../job-type";
import Department from "../department";
import WorkShift from "../work-shift";
import Experience from "../experience";

const LeftMenuBar = () => (
  <aside className="left-menu-bar w-full xs:hidden md:w-3/12 mr-2">
    <JobType />
    <Department />
    <WorkShift />
    <Experience />
  </aside>
);

export default LeftMenuBar;
