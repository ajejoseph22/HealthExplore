import { createMocks } from 'node-mocks-http'
import getJobs from '../pages/api/jobs'

describe('/api/jobs', ()=>{
  test('jobs', async ()=>{
    const {req, res} = createMocks({
      method: 'POST'
    })

    await getJobs(req, res)
    expect(res._getStatusCode()).toBe(200)
    expect(JSON.parse(res._getData()).length).toBeGreaterThan(0);
  })

  test('jobs_sorted', async ()=>{
    const {req, res} = createMocks({
      method: 'POST',
      query: {
        q: 'ma',
        sort: '-department'
      }
    })
    await getJobs(req, res);
    expect(res._getStatusCode()).toBe(200)
  })
})