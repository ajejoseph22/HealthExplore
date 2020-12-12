import Head from 'next/head';
import Navbar from '../components/organisms/Navbar';
import Main from '../components/organisms/Main';
import Footer from '../components/organisms/Footer';
import { useReducer } from 'react';

const Home = ({
  filters: { job_type: jobType, work_schedule: workSchedule,
  experience, department },
  jobs
}) => {
  const [state, dispatch] = useReducer()
  return (
    <div className='font-mono flex flex-col w-screen bg-gray-50 m-h-full'>
      <Head>
        <title>Clipboard Health</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Main
        jobType={jobType}
        workSchedule={workSchedule}
        experience={experience}
        department={department}
        jobs={jobs}
      />
      <Footer />
    </div>
  )
}

const callAPI = async (url) => {
  const response = await fetch(url);
  const json = await response.json();
  return json;
}

export const getStaticProps = async () => {
  const response = await Promise.all([
    callAPI(`${process.env.API_URL}/api/filters`),
    callAPI(`${process.env.API_URL}/api/jobs`)
  ])
  return { props: {
    filters: response[0],
    jobs: response[1]
  }};
}

export default Home;
