// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import jobs from '../../data/jobs.json';

const comparator = (a, b, parameter, order) => {
  if(order) {
    if(a[parameter] > b[parameter]) {
      return order === 'asc' ? 1 : -1
    } else {
      return order === 'asc' ? -1 : 1;
    }
  } else {
    return 0;
  }
}

export default async (req, res) => {
  const {
    query: { searchText='' }
  } = req;
  const job_type = req.query['filter[job_type]'],
    department = req.query['filter[department]'],
    work_schedule = req.query['filter[work_schedule]'],
    experience = req.query['experience'];
  const location = req.query['sort[location]'],
    role = req.query['sort[role]'], education = req.query['sort[education]'],
    sortExperience = req.query['sort[experience]'], sortDepartment = req.query['sort[department]'];
  res.statusCode = 200;
  const noFilterSelected = !(job_type || department || work_schedule || experience)
  // implement of filters and search
  const data = jobs.reduce((acc, job) => {
    let jobItems = job.items.filter((item) => (
      item.job_title.indexOf(searchText) !== -1 ||
      item.description.indexOf(searchText) !== -1 ||
      item.job_type.indexOf(searchText) !== -1 ||
      item.type.indexOf(searchText) !== -1 ||
      item.address.indexOf(searchText) !== -1 ||
      item.experience.indexOf(searchText) !== -1 ||
      item.city.indexOf(searchText) !== -1 ||
      item.department.filter((i) => i.indexOf(searchText) !== -1).length
    )).filter((item) => {
      return(
        (job_type ? job_type.indexOf(item.job_type) !== -1 : noFilterSelected) ||
        (experience ? experience.indexOf(item.experience) !== -1 : noFilterSelected) ||
        (work_schedule ? work_schedule.indexOf(item.work_schedule) !== -1 : noFilterSelected) ||
        (department ? item.department.filter((i) => department.indexOf(i) !== -1).length : noFilterSelected)
      )
    })
    if (
      (job.job_title.indexOf(searchText) !== -1 ||
      job.name.indexOf(searchText) !== -1) &&
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
  }, []).sort((a, b) => {
    // sum of comparators value with multiple filter values decides how to sort the jobs.
    return (
      comparator(a, b, 'location', location) +
      comparator(a, b, 'role', role) +
      comparator(a, b, 'education', education) +
      comparator(a, b, 'experience', sortExperience) +
      comparator(a, b, 'department', sortDepartment)
    )
  })

  // this timeout emulates unstable network connection, do not remove this one
  // you need to figure out how to guarantee that client side will render
  // correct results even if server-side can't finish replies in the right order
  await new Promise((resolve)=>setTimeout(resolve, 1000 * Math.random()));

  res.json({
    jobs: data,
    search_text: searchText
  })
}
