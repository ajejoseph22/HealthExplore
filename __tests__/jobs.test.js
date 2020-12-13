import { createMocks } from 'node-mocks-http';
import jobs from '../pages/api/jobs';
import jobsJSON from '../data/jobs.json';

test('Response on first render', async () => {
  const { req, res } = createMocks({
    method: 'GET'
  })
  await jobs(req, res);
  expect(JSON.parse(res._getData())).toEqual(
    expect.objectContaining(jobsJSON)
  )
})

test('Response on searchText entered, should show no data.', async () => {
  const { req, res } = createMocks({
    method: 'GET',
    query: {
      searchText: 'ashrith'
    }
  })
  await jobs(req, res);
  expect(JSON.parse(res._getData()).reduce((acc, cur) => cur.items.length + acc, 0)).toBe(0)
})

test('Response on searchText entered, should show only one listing', async () => {
  const { req, res } = createMocks({
    method: 'GET',
    query: {
      searchText: 'LPN Charge Nurse'
    }
  })
  await jobs(req, res);
  expect(JSON.parse(res._getData()).reduce((acc, cur) => cur.items.length + acc, 0)).toBe(1)
})

test('Response on searchText entered and filter is selected, should see zero listings', async () => {
  const { req, res } = createMocks({
    method: 'GET',
    query: {
      searchText: 'LPN Charge Nurse',
      job_type: 'Full-time'
    }
  })
  await jobs(req, res);
  expect(JSON.parse(res._getData()).reduce((acc, cur) => cur.items.length + acc, 0)).toBe(0)
})

test('Response when on a single filter is selected', async () => {
  const { req, res } = createMocks({
    method: 'GET',
    query: {
      searchText: '',
      job_type: 'Full-time'
    }
  })
  await jobs(req, res);
  expect(JSON.parse(res._getData()).reduce((acc, cur) => cur.items.length + acc, 0)).toBe(33)
})

test('Response when on a multiple filters are selected', async () => {
  const { req, res } = createMocks({
    method: 'GET',
    query: {
      searchText: '',
      job_type: 'Full-time',
      department: 'Surgery,Urology',
      work_schedule: 'Day shift'
    }
  })
  await jobs(req, res);
  expect(JSON.parse(res._getData()).reduce((acc, cur) => cur.items.length + acc, 0)).toBe(97)
})