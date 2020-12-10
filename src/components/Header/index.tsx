const styles = {
  link: 'px-3 uppercase'
}

const Header: React.FC = () => {
  return (
    <header className='sticky top-0 flex items-center justify-between h-16 px-6 bg-white shadow-sm'>
      <div className='flex-shrink-0'>
        <span className='text-blue-500 font-bold'>HEALTH EXPLORE</span>
      </div>

      <ul>
        <a href='#' className={styles.link}>
          Profile
        </a>
        <a href='#' className={styles.link}>
          Jobs
        </a>
        <a href='#' className={styles.link}>
          Professional Network
        </a>
        <a href='#' className={styles.link}>
          Lounge
        </a>
        <a href='#' className={styles.link}>
          Salary
        </a>
      </ul>

      <div className='flex flex-row'>
        <button className='px-4 h-10 border border-blue-500 uppercase rounded-md text-blue-500 hover:text-opacity-80'>Create Job</button>
        <button className="mx-4 bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center text-white">
          <span>JO</span>
        </button>
        <button className='h-10 hover:text-opacity-80'>LOGOUT</button>
      </div>
    </header>
  )
}

export default Header
