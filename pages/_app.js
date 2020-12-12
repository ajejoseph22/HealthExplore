import '../styles/globals.css'
import Head from 'next/head'

import TopBar from './components/topbar/TopBar';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Health Explore</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" />
      </Head>
      <TopBar />
      <Component {...pageProps} />
    </>
  )
}

export default App;
