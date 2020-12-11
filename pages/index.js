import { useEffect } from 'react';

import Head from 'next/head'

export default function Home() {
  //Effect
  useEffect(() => {
    fetch('api/jobs', {
      method: 'GET'
    })
      .then(res => res.json())
      .then(json => console.log(json))
  }, []);

  return (
    <div>
      <Head>
        <title>Fullstack Candidate Testing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

      </main>

    </div>
  )
}
