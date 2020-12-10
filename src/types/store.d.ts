declare namespace Test {
  export type GlobalState = {
    status: {
      [type: string]: 'request' | 'success' | 'failure'
      err?: any
    }
  }

  export type JobsState = {
    keyword: string
    availableFilters: {
      [key in FilterType]?: FilterItem[]
    }
    selectedFilters: {
      [key in FilterType]?: string[]
    }
    sort: Record<string, 'asc' | 'desc' | undefined>
    jobs: Job[]
  }

  export type StoreState = {
    global: GlobalState,
    jobs: JobsState
  }
}
