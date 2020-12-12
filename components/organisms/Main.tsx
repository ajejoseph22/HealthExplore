import { IMainProps } from "../../types";
import Filters from "./Filters";
import Searchbar from "./Searchbar";

const Main = ({
  experience, jobType, department, workSchedule
}: IMainProps) => {
  return (
    <main className='flex flex-col border-8 border-white'>
      <Searchbar />
      <div>
        <div className='flex flex-col'>
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
      </div>
    </main>
  )
}

export default Main;