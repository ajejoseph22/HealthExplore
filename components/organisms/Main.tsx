import { FILTER_OPTIONS, IMainProps } from "../../types";
import Content from "./Content";
import Filters from "./Filters";
import Searchbar from "./Searchbar";

const Main = ({
  filters: {
    experience, job_type, department, work_schedule
  }, jobs
}: IMainProps) => {
  return (
    <main className='flex flex-col mx-4'>
      <Searchbar />
      <div className='flex'>
        <div className='flex flex-col mx-3'>
          <Filters
            filters={job_type}
            heading='JOB TYPE'
            filterType={FILTER_OPTIONS.JOB_TYPE}
          />
          <Filters
            filters={department}
            heading='DEPARTMENT'
            filterType={FILTER_OPTIONS.DEPARTMENT}
          />
          <Filters
            filters={work_schedule}
            heading='WORK SCHEDULE'
            filterType={FILTER_OPTIONS.WORK_SCHEDULE}
          />
          <Filters
            filters={experience}
            heading='EXPERIENCE'
            filterType={FILTER_OPTIONS.EXPERIENCE}
          />
        </div>
        <Content jobs={jobs}/>
      </div>
    </main>
  )
}

export default Main;