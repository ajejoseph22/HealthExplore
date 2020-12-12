//React
import { useState, useEffect } from 'react';

//Next
import Head from 'next/head'
import fetch from 'node-fetch'

//Components
import SearchBar from '../components/search/SarchBar';
import FilterCard from '../components/navigation/FilterCard';
import JobList from '../components/jobs/JobList';

//Services
import { searchJobs, getSortedJobs } from '../services/jobs';

//Redux
import { useSelector } from 'react-redux';

function Home({ filters, jobs }) {
  //Redux
  const selectedSort = useSelector(state => state.sort.selectedSort);
  const sortOption = useSelector(state => state.sort.sortOption);

  //State
  const [searchInput, setSearchInput] = useState('');
  const [showJobs, setShowJobs] = useState(jobs.jobs);
  const [firstMount, setFirstMount] = useState(true);

  //Effect
  useEffect(() => {
    if (!firstMount) {
      // if (sortOption != 'neutral' && selectedSort != null) {

      //   if (sortOption == 'asc') {
      //     console.log('asc sort');
      //     sortJobsAsc().then(res => {
      //       setShowJobs(res);
      //     });
      //   }
      //   else if (sortOption == 'desc') {
      //     console.warn('desc sort');
      //     sortJobsDesc().then(res => {
      //       setShowJobs(res);
      //     });
      //   }

      // }
      // else if (selectedSort == null) {
      //   console.error('drugi');
      //   getAllJobs().then(res => {
      //     if (res.status == 200) {
      //       setShowJobs(res.jobs);
      //     }
      //   })
      // }
      getSortedJobs(selectedSort, sortOption, searchInput).then(res => {
        if (res.status === 200) {
          setShowJobs(res.jobs);
        }
        else {
          console.log('Something went wrong with sorting the jobs')
        }
      })
    }

    setFirstMount(false);
  }, [sortOption]);

  //Functions
  const jobSearch = () => {
    searchJobs(searchInput)
      .then(result => {
        if (result.status === 200) {
          setShowJobs(result.jobs);
        }
        else {
          console.log('Something went wrong with the search request')
        }
      })
  }

  return (
    <div className={`min-h-screen w-full`}>
      <Head>
        <title>Fullstack Candidate Testing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={'p-6 md:p-0 md:mt-px'}>
        <SearchBar
          placeholder={'Search for any job, title, keywords or company'}
          value={searchInput}
          onInputChange={newText => setSearchInput(newText)}
          onSearch={() => jobSearch()}
        />
      </div>

      <div className={`flex w-full md:mt-6 sm:mt-px`}>
        <div className={'flex flex-col space-y-4 w-1/3 p-6 pt-0 sm:hidden'}>
          {filters && Object.keys(filters).length > 0 ?
            Object.keys(filters).map((item, index) => (
              <FilterCard
                key={`filter_card_${index}`}
                title={item.replace('_', ' ')}
                data={Object.values(filters)[index]}
              />
            ))
            : false
          }
        </div>
        <div className={'flex w-2/3 p-6 pt-0 sm:w-full sm:p-0'}>
          <JobList
            data={showJobs}
            totalJobs={jobs.total_jobs}
          />
        </div>
      </div>

    </div>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const filtersRes = await fetch(`http://localhost:3000/api/filters`)
  const filters = await filtersRes.json()

  const jobsRes = await fetch('http://localhost:3000/api/jobs')
  const jobs = await jobsRes.json()

  // Pass data to the page via props
  return { props: { filters, jobs } }
}

export default Home;
