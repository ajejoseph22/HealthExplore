//Next
import Head from 'next/head'

//Components
import NavBar from '../components/navigation/NavBar';

export default function Home() {

  return (
    <div className={`bg-gray-50 min-h-screen w-full`}>
      <Head>
        <title>Fullstack Candidate Testing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      {/* <div className={`min-h-screen w-full bg-gray-50 z-0`}>
      </div> */}

    </div>
  )
}
