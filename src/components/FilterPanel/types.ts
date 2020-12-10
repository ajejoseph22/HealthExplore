export type FilterPanelProps = {
  title: string
  filter: Test.FilterType
  items?: Test.FilterItem[]
  selectedFilters?: string[]
  onSelect: (filter: Test.FilterType, key: string, on: boolean) => void
}