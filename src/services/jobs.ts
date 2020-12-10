import invokeApi from '#/utils/invokeApi'

type GetFiltersResponse = { [key in Test.FilterType]: Test.FilterItem[] }
export function getFilters(): Promise<GetFiltersResponse> {
  return invokeApi({
    endpoint: 'filters'
  })
}

type GetJobResponse = Test.Job[]
export function getJobs(payload): Promise<GetJobResponse> {
  return invokeApi({
    endpoint: 'jobs',
    method: 'post',
    body: payload
  })
}
