export const apiUrl = `${process.env.NEXT_PUBLIC_URL}/api`;

export const sortType = {
  ASC: "asc",
  DESC: "desc",
  NONE: "",
};

export const sortingOptions = [
  "location",
  "role",
  "department",
  "education",
  "experience",
];

export const hidden = "hidden";

export const emptyString = "";

export const departmentSeparator = ", ";

export const filterMap = {
  jobType: "job_type",
  workSchedule: "work_schedule",
  experience: "experience",
  department: "department",
};
