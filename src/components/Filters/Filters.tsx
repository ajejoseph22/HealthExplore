import { FC, useEffect } from 'react'
import FilterPanel from '#/components/FilterPanel'
import type { Props } from './types'

const Filters: FC<Props> = ({
  className,
  availableFilters,
  selectedFilters,
  getFilters,
  setFilter
}) => {
  useEffect(() => {
    getFilters()
  }, [])
  
  return (
    <div className={className}>
      <FilterPanel
        title='Job Type'
        filter='job_type'
        items={availableFilters.job_type}
        selectedFilters={selectedFilters?.job_type}
        onSelect={setFilter}
      />
      <FilterPanel
        title='Department'
        filter='department'
        items={availableFilters.department}
        selectedFilters={selectedFilters?.department}
        onSelect={setFilter}
      />
      <FilterPanel
        title='Work Schedule'
        filter='work_schedule'
        items={availableFilters.work_schedule}
        selectedFilters={selectedFilters?.work_schedule}
        onSelect={setFilter}
      />
      <FilterPanel
        title='Experience'
        filter='experience'
        items={availableFilters.experience}
        selectedFilters={selectedFilters?.experience}
        onSelect={setFilter}
      />
    </div>
  )
}

export default Filters