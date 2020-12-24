// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import sort from "fast-sort";

export default async (req, res) => {
  const { payload, criteria } = req.body;

  const sortParamsMap = {
    location: "county",
    role: "job_title",
    experience: "experience",
    department: "department",
    education: "required_credentials",
  };

  const result = sort(payload).by(
    Object.keys(criteria).reduce((acc, key) => {
      if (criteria[key]) {
        acc.push({ [criteria[key]]: (job) => job[sortParamsMap[key]] });
      }

      return acc;
    }, [])
  );

  res.statusCode = 200;
  res.json({ sortedResult: result });
};
