// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import jobs from '../../data/jobs.json';

export default async (req, res) => {
  const {
    query: { searchText }
  } = req;
  res.statusCode = 200;
  // @todo: implement filters and search
  let data = jobs;
  console.log(req.url)
  if(searchText) {
    data = jobs.reduce((acc, job) => {
      const jobItems = job.items.filter((item) => (
        item.job_title.indexOf(searchText) !== -1 ||
        item.description.indexOf(searchText) !== -1 ||
        item.job_type.indexOf(searchText) !== -1 ||
        item.type.indexOf(searchText) !== -1 ||
        item.address.indexOf(searchText) !== -1 ||
        item.experience.indexOf(searchText) !== -1 ||
        item.city.indexOf(searchText) !== -1 ||
        item.department.filter((i) => i.indexOf(searchText) !== -1).length ||
        item.required_credentials.filter((i) => i.indexOf(searchText) !== -1).length ||
        item.required_skills.filter((i) => i.indexOf(searchText) !== -1).length
      ))
      if (
        job.job_title.indexOf(searchText) !== -1 ||
        job.name.indexOf(searchText) !== -1 ||
        jobItems.length
      ) {
        return [
          ...acc,
          {
            ...job,
            items: jobItems
          }
        ]
      }
      return acc;
    }, [])
  }
  // @todo: implement automated tests

  // this timeout emulates unstable network connection, do not remove this one
  // you need to figure out how to guarantee that client side will render
  // correct results even if server-side can't finish replies in the right order
  await new Promise((resolve)=>setTimeout(resolve, 1000 * Math.random()));

  res.json(data)
}
