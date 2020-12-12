import { IIndividualJobProps } from "../../types";


const PropertyText = ({
  children
}) => {
  return (
    <p>
      {children}
    </p>
  )
}
const IndividualJob = ({
  department, description, hours,
  work_schedule: workSchedule, job_type: jobType,
  job_title: jobTitle,
  salary_range: salaryRange, city
}: IIndividualJobProps) => {
  return (
    <li>
      <div>
        <div className='flex flex-col'>
          <p></p>
        </div>
      </div>
    </li>
  )
}

export default IndividualJob;