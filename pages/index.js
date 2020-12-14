import {useState, useEffect} from 'react';
import Head from 'next/head'
import JobBoard from '../components/JobBoard/index';
import FiltersBar from '../components/FiltersBar/index';
import SearchBar from '../components/SearchBar/index';
import SearchContext from '../context/SearchContext';
import FiltersContext from '../context/FiltersContext';
import JobContext from '../context/JobContext';
import styles from '../styles/Home.module.css'


export default function Home() {

  // Since time is limited I will use a basic context solution to implement the search function
  // Redux would be better in this case
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState({});
  const [jobs, setJobs] = useState([]);

  return (
    <FiltersContext.Provider value={{filters:filters, setFilters:setFilters}}>
      <JobContext.Provider value={{jobs:jobs, setJobs:setJobs}}>
        <SearchContext.Provider value={{query:query, setQuery:setQuery}}>
          <div className={styles.container}>
            <Head>
              <title>Create Next App</title>
              <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="w-full mb-5 bg-white flex items-center" style={{height:60}}>
              <h1 className="font-bold ml-5 text-blue-400 flex-1">HEALTH EXPLORE</h1>
              <div className="hidden md:flex flex-1">
                <h1 className="font-bold ml-7">PROFILE</h1>
                <h1 className="font-bold ml-7">JOBS</h1>
                <h1 className="font-bold ml-7">PROFESSIONAL NETWORK</h1>
                <h1 className="font-bold ml-7">LOUNGE</h1>
                <h1 className="font-bold ml-7">SALARY</h1>
              </div>
              <div className="flex justify-end flex-1 mr-5">
                <div className="hidden lg:block px-4 py-2 border-blue-400 border rounded-lg text-blue-400">Create job</div>
                <div className="relative">
                  <div className="p-2 px-3 ml-5 rounded-full bg-blue-400 text-white font-bold">JO</div>
                  <span className="absolute -top-1 right-0 bg-red-400 w-5 h-5 flex items-center 
                  justify-center border-2 rounded-lg text-xs text-white font-bold" style={{borderColor:'white'}}>4</span>
                </div>
                <div className="hidden lg:flex flex items-center justify-center ml-5 font-bold">Logout</div>
              </div>
            </div>
            <main className="container mx-auto px-4 md:flex md:flex-col">
              <div className="container mb-5">
                <SearchBar/>
              </div>
              <div className="container md:flex">
                <div className="hidden md:flex md:flex-col">
                  <FiltersBar/>
                </div>
                <JobBoard/>
              </div>
            </main>

            <footer className="w-full mt-5 bg-white flex p-10 flex-wrap">
              <div className="flex flex-col flex-2 mt-6 sm:mt-0 md:pr-10">
                <h1 className="text-xl font-bold">About us</h1>
                <p className="text-sm mt-2">We are a team of nurses, doctors, technologists and executives dedicated to help nurses find jobs that they love.</p>
                <p className="text-sm mt-2">All copyrights reserved © 2020 - Health Explore</p>
              </div>
              <div style={{minWidth:200}} className="flex flex-col flex-1 mt-6 sm:mt-0">
                <h1 className="text-xl font-bold">Sitemap</h1>
                <p className="text-sm mt-2">Nurses</p>
                <p className="text-sm mt-2">Employers</p>
                <p className="text-sm mt-2">Social networking</p>
                <p className="text-sm mt-2">Jobs</p>
              </div>
              <div style={{minWidth:200}} className="flex flex-col flex-1 mt-6 sm:mt-0">
                <h1 className="text-xl font-bold">Privacy</h1>
                <p className="text-sm mt-2">Terms of use</p>
                <p className="text-sm mt-2">Terms of use</p>
                <p className="text-sm mt-2">Cookie policy</p>
              </div>
            </footer>
          </div>
        </SearchContext.Provider>
      </JobContext.Provider>
    </FiltersContext.Provider>
  )
}
