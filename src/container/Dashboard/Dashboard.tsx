import debounce from 'lodash/debounce'
import { useEffect } from 'react'
import Header from '#/components/Header'
import Footer from '#/components/Footer'
import Filters from '#/components/Filters'
import JobList from '#/components/JobList'
import SearchBar from '#/components/SearchBar'
import type { Props } from './types'

const Dashboard: React.FC<Props> = ({ keyword, selectedFilters, sort, getJobs }) => {
  useEffect(() => {
    loadData()
  }, [keyword, selectedFilters, sort])

  const loadData = debounce(() => {
    getJobs()
  }, 200)

  return (
    <div className='bg-gray-50'>
      <Header />
      <SearchBar className='mt-3 mx-3' />
      <div className='flex px-3'>
        <Filters className='mr-3 flex-shrink-0 w-100' />
        <JobList className='flex-grow my-3' />
      </div>
      <Footer />
    </div>
  )
}

export default Dashboard
