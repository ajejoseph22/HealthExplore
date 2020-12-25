import JobType from "../job-type";
import Department from "../department";
import WorkShift from "../work-shift";
import Experience from "../experience";
import { filterMap } from "../../util/constants";
import { HomeContext } from "../../pages";

const LeftMenuBar = () => (
  <HomeContext.Consumer>
    {({ appFilters }) => (
      <aside className="hidden left-menu-bar w-0 md:w-3/12 mr-2 md:block">
        <JobType filter={appFilters[filterMap.jobType]} />
        <Department filter={appFilters[filterMap.department]} />
        <WorkShift filter={appFilters[filterMap.workSchedule]} />
        <Experience filter={appFilters[filterMap.experience]} />
      </aside>
    )}
  </HomeContext.Consumer>
);

export default LeftMenuBar;
