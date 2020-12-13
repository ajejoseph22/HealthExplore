import React from "react";
import moment from "moment";
import { IJob } from "../../../interfaces";
import { Button } from "../../common/Button";
import { ButtonOutlined } from "../../common/ButtonOutlined";

export interface IJobDetailsProps {
  job: IJob;
}
const JobDetails = (props: IJobDetailsProps) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between">
      <ul className="mt-4">
        <li className="flex flex-col sm:flex-row sm:grid sm:grid-cols-2">
          <p className="text-gray-800 font-semibold text-sm">Department:</p>
          <p className="text-gray-800 text-sm max-w-lg">
            {props.job.department.join(", ")}
          </p>
        </li>
        <li className="flex flex-col sm:flex-row mt-3 sm:grid sm:grid-cols-2">
          <p className="text-gray-800 font-semibold text-sm">Hours / shifts:</p>
          <p className="text-gray-800 text-sm max-w-lg">
            {props.job.hours[0]} hours / {props.job.work_schedule}
          </p>
        </li>
        <li className="flex flex-col sm:flex-row mt-3 sm:grid sm:grid-cols-2">
          <p className="text-gray-800 font-semibold text-sm">Summary:</p>
          <p className="text-gray-800 text-sm max-w-lg">
            {props.job.description}
          </p>
        </li>
      </ul>
      <div className="flex flex-row justify-start mt-2 sm:mt-0 sm:justify-center sm:flex-col">
        <div>
          <Button>Job details</Button>
        </div>
        <div>
          <ButtonOutlined className="ml-2 sm:ml-0 sm:mt-2">
            Save job
          </ButtonOutlined>
        </div>
      </div>
    </div>
  );
};

interface IJobProps {
  job: IJob;
}
const Job = (props: IJobProps) => {
  const [showJobDetails, setShowJobDetails] = React.useState(false);

  return (
    <li className="border-t border-color-50 py-4 cursor-pointer">
      <div
        className="flex justify-between flex-col sm:flex-row"
        onClick={() => setShowJobDetails(!showJobDetails)}
      >
        <div>
          <p className="font-semibold text-sm text-gray-800">
            {props.job.job_title}
          </p>
          <p className="text-sm text-gray-800">
            {props.job.job_type} | ${props.job.salary_range[0]} - $
            {props.job.salary_range[1]} | {props.job.city}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-800">
            {moment(props.job.created).fromNow()}
          </p>
        </div>
      </div>
      {showJobDetails && <JobDetails job={props.job} />}
    </li>
  );
};

export interface IJobsProps {
  jobs: IJob[];
}
export const Jobs = (props: IJobsProps) => {
  return (
    <ul className="mt-2">
      {props.jobs.map((job) => (
        <Job job={job} />
      ))}
    </ul>
  );
};
