export type IFilterType = {
  key: string;
  doc_count: number;
  active?: boolean;
}

export interface IFiltersProps {
  heading: string;
  filters: IFilterType[];
}

export interface IIndividualJobProps {
  department: string[];
  description: string;
  hours: [number];
  work_schedule: string;
  job_type: string;
  job_title: string;
  salary_range: [number, number];
  city: string;
}
export interface IJobsProps {
  total_jobs_in_hospital: number;
  name: string;
  job_title: string;
  items: IIndividualJobProps[];
}

export interface IMainProps {
  jobType: IFilterType[];
  experience: IFilterType[];
  department: IFilterType[];
  workSchedule: IFilterType[];
  jobs: IJobsProps[];
}