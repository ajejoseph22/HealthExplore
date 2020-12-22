// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import filters from "../../data/filters";
import sort from "fast-sort";

export default async (req, res) => {
  const { payload, criteria } = req.body;
  console.log(payload, payload);
  const sortParamsMap = {
    location: "county",
    role: "job_title",
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
  res.json({ filteredResult: result });
};
