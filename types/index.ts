export type IFilterType = {
  key: string;
  doc_count: number;
  active?: boolean;
}

export interface IFiltersProps {
  heading: string;
  filters: IFilterType[];
}

export interface IMainProps {
  jobType: IFilterType[];
  experience: IFilterType[];
  department: IFilterType[];
  workSchedule: IFilterType[];
}