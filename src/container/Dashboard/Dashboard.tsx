import debounce from 'lodash/debounce'
import { useEffect } from 'react'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Header from '#/components/Header'
import Footer from '#/components/Footer'
import Filters from '#/components/Filters'
import JobList from '#/components/JobList'
import SearchBar from '#/components/SearchBar'
import { Types } from '#/store/actions/jobs'
import type { Props } from './types'

const Dashboard: React.FC<Props> = ({ asyncStatus, keyword, selectedFilters, sort, getJobs }) => {
  useEffect(() => {
    loadData()
  }, [keyword, selectedFilters, sort])

  useEffect(() => {
    if (asyncStatus[Types.GET_JOBS] === 'request') {
      NProgress.start()
    } else {
      NProgress.done()
    }
  }, [asyncStatus[Types.GET_JOBS]])

  const loadData = debounce(() => {
    getJobs()
  }, 200)

  return (
    <div className='bg-gray-50'>
      <Header />
      <SearchBar className='mt-3 mx-3' />
      <div className='flex flex-col-reverse lg:flex-row px-3'>
        <Filters className='lg:mr-3 flex-shrink-0 w-100' />
        <JobList className='flex-grow my-3' />
      </div>
      <Footer />
    </div>
  )
}

export default Dashboard
