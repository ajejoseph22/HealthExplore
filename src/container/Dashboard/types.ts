export type Props = {
  selectedFilters: Test.JobsState['selectedFilters']
  sort: Test.JobsState['sort']
  keyword: string
  getJobs: () => void
}