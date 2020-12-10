import {
  filter,
  search,
  sort
} from '../services/server'
import jobs from '../data/jobs.json'

describe('Get Jobs Service:', () => {
  test('Search with keyword', async () => {
    let testJobs = JSON.parse(JSON.stringify(jobs))
    testJobs = search(testJobs, /practitioner/ig)
    testJobs = testJobs.filter((job) => job.items && job.items.length)
    expect(testJobs.length).toBe(2)
    expect(testJobs[0].items.length).toBe(2)
    expect(testJobs[1].items.length).toBe(2)
  })
  test('Filter', async () => {
    let testJobs = JSON.parse(JSON.stringify(jobs))
    testJobs = filter(testJobs, {
      'job_type': ['Per-Diem']
    })
    testJobs = testJobs.filter((job) => job.items && job.items.length)
    expect(testJobs.length).toBe(13)
  })
})
