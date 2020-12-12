import Head from 'next/head';
import Navbar from '../components/organisms/Navbar';
import Main from '../components/organisms/Main';

const Home = ({
  job_type: jobType, work_schedule: workSchedule,
  experience, department
}) => {
  return (
    <div className='font-mono flex flex-col w-screen bg-gray-50 m-h-full'>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Main
        jobType={jobType}
        workSchedule={workSchedule}
        experience={experience}
        department={department}
      />
    </div>
  )
}

export const getStaticProps = async (context, req) => {
  console.log(global)
  const response = await fetch(`${process.env.API_URL}/api/filters`)
  const json = await response.json()
  return { props: json };
}

export default Home;
