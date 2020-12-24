// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import jobs from "../../data/jobs.json";
import FuzzySearch from "fuzzy-search";
import groupBy from "lodash.groupby";

const applyFilter = (result, jobType, department, workShift, experience) => {
  let newResult = jobType
    ? new FuzzySearch(result, ["job_type"]).search(jobType)
    : result;

  newResult = department
    ? new FuzzySearch(newResult, ["department"]).search(department)
    : newResult;

  newResult = experience
    ? new FuzzySearch(newResult, ["experience"]).search(experience)
    : newResult;

  newResult = workShift
    ? new FuzzySearch(newResult, ["work_schedule"]).search(workShift)
    : newResult;

  return newResult;
};

export default async (req, res) => {
  const {
    query,
    jobType,
    department,
    workShift,
    experience,
    locationSort,
    roleSort,
    educationSort,
    experienceSort,
    departmentSort,
  } = req.query;

  const listOfJobs = jobs.reduce((acc, job) => {
    return acc.concat(job.items);
  }, []);

  const result = query
    ? new FuzzySearch(listOfJobs, [
        "job_title",
        "name",
        "experience",
        "type",
        "work_schedule",
        "county",
        "city",
      ]).search(query)
    : listOfJobs;

  const filteredResult = applyFilter(
    result,
    jobType,
    department,
    workShift,
    experience
  );

  const { sortedResult } = await (
    await fetch("http://localhost:3000/api/sort", {
      method: "POST",
      body: JSON.stringify({
        payload: filteredResult,
        criteria: {
          location: locationSort,
          education: educationSort,
          role: roleSort,
          experience: experienceSort,
          department: departmentSort,
        },
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
  ).json();

  // this timeout emulates unstable network connection, do not remove this one
  // you need to figure out how to guarantee that client side will render
  // correct results even if server-side can't finish replies in the right order
  await new Promise((resolve) => setTimeout(resolve, 1000 * Math.random()));

  res.statusCode = 200;
  res.json({ result: groupBy(sortedResult, (job) => job.name) });
};
