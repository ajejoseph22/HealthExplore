import { createMocks } from 'node-mocks-http'
import getJobs from '../pages/api/jobs'

describe('/api/jobs', () => {
  test('get jobs without params', async () => {
    const { req, res } = createMocks({
      method: 'POST'
    })

    await getJobs(req, res)

    expect(res._getStatusCode()).toBe(200)
    expect(JSON.parse(res._getData()).length).toBe(20)
  })

  test('get jobs with params', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        keyword: 'practitioner',
        filter: {
          'job_type': ['Per-Diem']
        }
      }
    })

    await getJobs(req, res)

    expect(res._getStatusCode()).toBe(200)
    expect(JSON.parse(res._getData()).length).toBe(1)
  })
})
