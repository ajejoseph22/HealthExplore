// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import jobs from "../../data/jobs.json";
import { IJobListing } from "../../app/interfaces";
import {
  applyFullSearch,
  applySorting,
} from "../../server/services/jobListingsService";

export default async (req, res) => {
  res.statusCode = 200;
  // @todo: implement filters and search
  // @todo: implement automated tests

  const sort = {
    location: req.query.location,
    experience: req.query.experience,
  };

  const filteredJobs = applySorting(
    applyFullSearch(jobs, req.query.fullSearch),
    sort
  );

  // this timeout emulates unstable network connection, do not remove this one
  // you need to figure out how to guarantee that client side will render
  // correct results even if server-side can't finish replies in the right order
  await new Promise((resolve) => setTimeout(resolve, 1000 * Math.random()));

  res.json(filteredJobs);
};
