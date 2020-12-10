const Footer: React.FC = () => {
  return (
    <footer className='grid grid-cols-4 p-6 gap-4 bg-white shadow-sm text-gray-600'>
      <div className='col-span-2'>
        <h3 className='text-black text-xl font-bold mb-2'>About us</h3>
        <p>
          We are a team of nurses, doctors, technologists and executives
          dedicated to help nurse find jobs that they love.
        </p>
        <p className='mt-2'>All copyrights reserved 2020 - Health Explore</p>
      </div>
      <div>
        <h3 className='text-black text-xl font-bold mb-2'>Sitemap</h3>
        <ul>
          <li className='mb-2'>
            <a href='#'>Nurses</a>
          </li>
          <li className='mb-2'>
            <a href='#'>Employers</a>
          </li>
          <li className='mb-2'>
            <a href='#'>Social networking</a>
          </li>
          <li className='mb-2'>
            <a href='#'>Jobs</a>
          </li>
        </ul>
      </div>
      <div>
        <h3 className='text-black text-xl font-bold mb-2'>Privacy</h3>
        <ul>
          <li className='mb-2'>
            <a href='#'>Terms of use</a>
          </li>
          <li className='mb-2'>
            <a href='#'>Privacy policy</a>
          </li>
          <li className='mb-2'>
            <a href='#'>Cookie poliy</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
