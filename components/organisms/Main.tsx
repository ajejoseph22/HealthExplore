import { IMainProps } from "../../types";
import Content from "./Content";
import Filters from "./Filters";
import Searchbar from "./Searchbar";

const Main = ({
  experience, jobType, department, workSchedule, jobs
}: IMainProps) => {
  return (
    <main className='flex flex-col border-8 border-white'>
      <Searchbar />
      <div className='flex'>
        <div className='flex flex-col mx-3'>
          <Filters
            filters={jobType}
            heading='JOB TYPE'
          />
          <Filters
            filters={department}
            heading='DEPARTMENT'
          />
          <Filters
            filters={workSchedule}
            heading='WORK SCHEDULE'
          />
          <Filters
            filters={experience}
            heading='EXPERIENCE'
          />
        </div>
        <Content jobs={jobs}/>
      </div>
    </main>
  )
}

export default Main;