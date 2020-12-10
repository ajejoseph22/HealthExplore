export type JobListProps = {
  className?: string
  jobs: Test.Job[]
  sort: Test.JobsState['sort']
  setSort: (option: string, state?: 'asc' | 'desc') => void
}
