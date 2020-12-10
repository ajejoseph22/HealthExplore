import get from 'lodash/get'
import sortBy from 'lodash/sortBy'

export function search(jobs: Test.Job[], searchRegex: RegExp) {
  jobs = jobs.filter((job) => {
    return searchRegex.test(job.job_title) || searchRegex.test(job.name)
  })

  jobs.forEach((job) => {
    job.items = job.items.filter((item) => {
      return (
        searchRegex.test(item.city) ||
        searchRegex.test(item.job_type) ||
        searchRegex.test(item.job_title)
      )
    })
  })

  return jobs
}

export function sort(
  jobs: Test.Job[],
  sortOption: Record<string, 'asc' | 'desc' | undefined>
) {
  for (let key of Object.keys(sortOption)) {
    if (sortOption[key]) {
      jobs = sortByKey(jobs, key, sortOption[key])
    }
  }

  return jobs
}

export function sortByKey(
  jobs: Test.Job[],
  key: string,
  order: 'asc' | 'desc'
) {
  const sortKey = key === 'location' ? 'city' : key

  jobs.forEach((job) => {
    job.items = sortBy(job.items, (item) => item[sortKey])
    if (order === 'desc') job.items.reverse()
  })

  return sortBy(jobs, (job) => get(job, ['items', '0', sortKey]))
}

export function filter(jobs: Test.Job[], filters: Test.JobsState['selectedFilters']) {
  if (!Object.keys(filters).length) return jobs

  jobs.forEach((job) => {
    job.items = job.items.filter((item) => {
      for (let key of Object.keys(filters)) {
        if (!filters[key] || !filters[key].length) {
          return true
        } else if (filters[key].includes(item[key])) {
          return true
        } else if (Array.isArray(item[key])) {
          for (let itemKey of item[key]) {
            if (filters[key].includes(itemKey)) {
              return true
            }
          }
        }
      }
      return false
    })
  })

  return jobs
}
