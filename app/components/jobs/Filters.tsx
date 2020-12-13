import React from "react";
import { IFilters } from "../../interfaces";
import { FilterCard } from "./FilterCard";

export interface IFiltersProps {
  filters: IFilters | null;
}
export const Filters = (props: IFiltersProps) => {
  return (
    <div className="bg-gray-100 pr-4 hidden md:block">
      <FilterCard title="Job type" filters={props.filters?.job_type || []} />
      <FilterCard
        title="Department"
        filters={props.filters?.department || []}
      />
      <FilterCard
        title="Work schedule"
        filters={props.filters?.work_schedule || []}
      />
      <FilterCard
        title="Experience"
        filters={props.filters?.experience || []}
      />
    </div>
  );
};
