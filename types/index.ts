import { ChangeEvent } from "react";

export enum SORT_OPTIONS {
  LOCATION = 'location',
  ROLE = 'role',
  DEPARTMENT = 'department',
  EDUCATION = 'education',
  EXPERIENCE = 'experience',
}

export enum FILTER_OPTIONS {
  JOB_TYPE = 'job_type',
  DEPARTMENT = 'department',
  WORK_SCHEDULE = 'work_schedule',
  EXPERIENCE = 'experience',
}

export enum SORT_ORDERS {
  ASC = 'asc',
  DESC = 'desc'
}

export type IFilterType = {
  key: string;
  doc_count: number;
  active?: boolean;
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

export interface IHomeProps {
  jobs: IJobsProps[];
  filters: {
    [key in FILTER_OPTIONS]: IFilterType[];
  };
}
export interface IHomeState extends IHomeProps {
  isLoading: boolean;
  isError: boolean;
  searchText: string;
  sortOptions: {
    [key in SORT_OPTIONS]: SORT_ORDERS | null;
  };
}

export interface IMainProps extends IHomeState {
  onSearchTextChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export enum IHomeActionTypes {
  TOGGLE_SORT_OPTION,
  TOGGLE_FILTER_OPTION,
  LOADING_DONE,
  LOADING_ERROR,
  SEARCH_QUERY_CHANGE,
}

export interface IToggleSortOption {
  type: IHomeActionTypes.TOGGLE_SORT_OPTION;
  payload: { option: SORT_OPTIONS; };
}

export interface IToggleFilterOption {
  type: IHomeActionTypes.TOGGLE_FILTER_OPTION,
  payload: { filterType: FILTER_OPTIONS; filterKey: string; }
}

export interface IUpdateLoadingDoneState {
  type: IHomeActionTypes.LOADING_DONE;
  payload: { data: IJobsProps[] };
}
export interface IUpdateErrorLoadingState {
  type: IHomeActionTypes.LOADING_ERROR;
}

export interface ISearchQueryChange {
  type: IHomeActionTypes.SEARCH_QUERY_CHANGE;
  payload: { searchText: string; }
}

export type IHomeReducerActionType =
  | IToggleSortOption
  | IToggleFilterOption
  | IUpdateLoadingDoneState
  | IUpdateErrorLoadingState
  | ISearchQueryChange;

export interface IFiltersProps {
  heading: string;
  filters: IFilterType[];
  filterType: FILTER_OPTIONS;
}