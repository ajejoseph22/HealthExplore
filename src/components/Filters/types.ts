export type Props = {
  className?: string
  availableFilters: Test.JobsState['availableFilters']
  selectedFilters: Test.JobsState['selectedFilters']
  getFilters: () => void
  setFilter: (filter: Test.FilterType, key: string, on: boolean) => void
}