//React
import { useState } from 'react';

//Next
import Head from 'next/head'
import fetch from 'node-fetch'

//Components
import SearchBar from '../components/search/SarchBar';
import FilterCard from '../components/navigation/FilterCard';
import JobList from '../components/jobs/JobList';

//Services
import { searchJobs } from '../services/jobs';

function Home({ filters, jobs }) {
  //State
  const [searchInput, setSearchInput] = useState('');
  const [showJobs, setShowJobs] = useState(jobs.jobs);

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
  console.log(jobs.total_jobs);

  // Pass data to the page via props
  return { props: { filters, jobs } }
}

export default Home;
