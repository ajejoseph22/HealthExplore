// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import jobs from '../../data/jobs.json';

export default async (req, res) => {
  const {
    query: { searchText='', job_type='', department='', work_schedule='', experience='' }
  } = req;
  res.statusCode = 200;
  console.log(job_type)
  const noFilterSelected = !(job_type || department || work_schedule || experience)
  // @todo: implement filters and search
  const data = jobs.reduce((acc, job) => {
    let jobItems = job.items.filter((item) => (
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
    )).filter((item) => {
      return(
        (job_type ? job_type.indexOf(item.job_type) !== -1 : noFilterSelected) ||
        (experience ? experience.indexOf(item.experience) !== -1 : noFilterSelected) ||
        (work_schedule ? work_schedule.indexOf(item.work_schedule) !== -1 : noFilterSelected) ||
        (department ? item.department.filter((i) => department.indexOf(i) !== -1).length : noFilterSelected)
      )
    })
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
  // @todo: implement automated tests

  // this timeout emulates unstable network connection, do not remove this one
  // you need to figure out how to guarantee that client side will render
  // correct results even if server-side can't finish replies in the right order
  await new Promise((resolve)=>setTimeout(resolve, 1000 * Math.random()));

  res.json(data)
}
