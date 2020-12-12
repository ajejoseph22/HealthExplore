const Footer = () => (
  <footer className='grid grid-cols-7 bg-white mt-5 h-220 gap-2'>
    <div className='flex flex-col col-span-3 ml-8 my-8'>
      <h6 className='text-2xl py-3'>
        About us
      </h6>
      <p className='py-2 text-gray-600 text-sm'>
        We are a team of nurses, doctors, technologists and executives dedicated to help nurses find jobs that they love.
      </p>
      <p className='text-gray-600 text-sm'>
        All copyrights reserved &#169; 2020 - Health Explore
      </p>
    </div>
    <div className='flex flex-col col-span-2 my-8'>
      <h6 className='text-2xl py-3'>
        Sitemap
      </h6>
      <a href='#' className='text-gray-600 text-sm hover:text-blue-500'>
        Nurses
      </a>
      <a href='#' className='text-gray-600 text-sm hover:text-blue-500'>
        Employers
      </a>
      <a href='#' className='text-gray-600 text-sm hover:text-blue-500'>
        Social networking
      </a>
      <a href='#' className='text-gray-600 text-sm hover:text-blue-500'>
        Jobs
      </a>
    </div>
    <div className='flex flex-col col-span-2 my-8'>
      <h6 className='text-2xl py-3'>
        Privacy
      </h6>
      <a href='#' className='text-gray-600 text-sm hover:text-blue-500'>
        Terms of use
      </a>
      <a href='#' className='text-gray-600 text-sm hover:text-blue-500'>
        Privacy policy
      </a>
      <a href='#' className='text-gray-600 text-sm hover:text-blue-500'>
        Cookie policy
      </a>
    </div>
  </footer>
)

export default Footer;