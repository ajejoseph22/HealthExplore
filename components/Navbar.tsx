

const NavLink = ({
  children, className=''
}) => (
  <h3 className={`${className} px-2.5`}>{children}</h3>
)
const Navbar = () => {
  return (
    <nav className='flex items-center min-w-full h-16 bg-white'>
      <h1 className='ml-6 text-xl text-blue-500'>HEALTH EXPLORE</h1>
      <div className='hidden sm:flex mx-auto'>
        <NavLink>PROFILE</NavLink>
        <NavLink>JOBS</NavLink>
        <NavLink>PROFESSIONAL NETWORK</NavLink>
        <NavLink>LOUNGE</NavLink>
        <NavLink>SALARY</NavLink>
      </div>
      <div className='flex justify-end sm:items-center flex-grow'>
        <button className='hidden sm:block rounded-lg border-solid border-2 border-blue-500 text-blue-500 font-semibold p-2 mx-5'>
          CREATE JOB
        </button>
        <p className='mx-2.5 pt-2 bg-blue-500 rounded-full text-white h-10 w-10 text-center font-semibold align-middle'>
          VAR
        </p>
        <NavLink className='hidden sm:block mr-4'>
          LOGOUT
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar;