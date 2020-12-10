// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import jobs from '#/data/jobs.json'
import * as services from '#/services/server'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200

  if (req.method === 'POST') {
    // @todo: implement filters and search
    // @todo: implement automated tests

    const { keyword, filter: filterOptions, sort: sortOptions } = req.body

    let filteredJobs = JSON.parse(JSON.stringify(jobs))

    if (keyword) {
      const regExp = new RegExp(
        keyword
          .split(' ')
          .filter((e) => e)
          .join('|'),
        'ig'
      )
      filteredJobs = services.search(filteredJobs, regExp)
    }

    if (filterOptions) {
      filteredJobs = services.filter(filteredJobs, filterOptions)
    }

    if (sortOptions) {
      filteredJobs = services.sort(filteredJobs, sortOptions)
    }

    filteredJobs = filteredJobs.filter((job) => job.items && job.items.length)

    // this timeout emulates unstable network connection, do not remove this one
    // you need to figure out how to guarantee that client side will render
    // correct results even if server-side can't finish replies in the right order
    await new Promise((resolve) => setTimeout(resolve, 1000 * Math.random()))

    res.json(filteredJobs)
  }
}
