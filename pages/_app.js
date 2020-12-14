import '@/styles/main.scss'
import Head from 'next/head'

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const App = ({ Component, props }) => {
  return (
    <>
      <Head>
        <title>Health Explore</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" />
      </Head>
      <Navbar />
      <Component { ...props } />
      <Footer />
    </>
  )
}

export default App;
