export type Props = {
  asyncStatus: Test.GlobalState['status']
  selectedFilters: Test.JobsState['selectedFilters']
  sort: Test.JobsState['sort']
  keyword: string
  getJobs: () => void
}