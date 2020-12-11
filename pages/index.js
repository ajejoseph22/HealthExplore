//React
import { useState } from 'react';

//Next
import Head from 'next/head'

//Components
import NavBar from '../components/navigation/NavBar';
import SearchBar from '../components/search/SarchBar';

export default function Home() {
  //State
  const [searchInput, setSearchInput] = useState('');

  return (
    <div className={`bg-gray-50 min-h-screen w-full`}>
      <Head>
        <title>Fullstack Candidate Testing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <div className={'p-6 md:p-0 md:mt-px'}>
        <SearchBar
          placeholder={'Search for any job, title, keywords or company'}
          value={searchInput}
          onInputChange={newText => setSearchInput(newText)}
        />
      </div>

    </div>
  )
}
