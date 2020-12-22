// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import filters from "../../data/filters";
import jobs from "../../data/jobs.json";
import FuzzySearch from "fuzzy-search";

export default async (req, res) => {
  const {
    query,
    jobType,
    department,
    workShift,
    location,
    role,
    education,
    experience,
  } = req.query;

  const listOfJobs = jobs.reduce((acc, job) => {
    return acc.concat(job.items);
  }, []);

  let result = query
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

  result = jobType
    ? new FuzzySearch(result, ["job_type"]).search(jobType)
    : result;

  result = department
    ? new FuzzySearch(result, ["department"]).search(department)
    : result;

  result = experience
    ? new FuzzySearch(result, ["experience"]).search(experience)
    : result;

  result = workShift
    ? new FuzzySearch(result, ["work_schedule"]).search(workShift)
    : result;
  // console.log("result", result);

  const { filteredResult } = await (
    await fetch("http://localhost:3000/api/filters", {
      method: "POST",
      body: JSON.stringify({ payload: result, criteria: { location: "asc" } }),
      headers: {
        "Content-type": "application/json",
      },
    })
  ).json();

  // @todo: implement filters and search
  // @todo: implement automated tests

  // this timeout emulates unstable network connection, do not remove this one
  // you need to figure out how to guarantee that client side will render
  // correct results even if server-side can't finish replies in the right order
  await new Promise((resolve) => setTimeout(resolve, 1000 * Math.random()));

  res.statusCode = 200;
  res.json({ result: filteredResult });
};
