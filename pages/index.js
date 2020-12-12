import Head from 'next/head'
import Navbar from '../components/organisms/Navbar';
import Main from '../components/organisms/Main';

const Home = () => {

  return (
    <div className='font-mono flex flex-col w-screen bg-gray-50 m-h-full'>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Main />
    </div>
  )
}

export const getStaticProps = async (context) => {

}

export default Home;
