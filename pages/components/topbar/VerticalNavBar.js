import { useState } from 'react';

const VerticalNavBar = props => {
  return (
    <>
      <ul className="flex lg:hidden flex-col bg-white items-center space-y-2 pb-4 uppercase ">
        <li className="py-2 mx-4"><a href="#"> Profile</a></li>
        <li className="py-2 mx-4"><a href="#">Jobs</a></li>
        <li className="py-2 mx-4"><a href="#"> Professional Network</a></li>
        <li className="py-2 mx-4"><a href="#"> Lounge</a></li>
        <li className="py-2 mx-4"><a href="#">Salary</a></li>
        <li className="py-2 mx-4"><a href="#" className="create-job">CREATE JOB</a></li>
        <h4 className="py-2 mx-4"><a href="#">Logout</a></h4>
      </ul>
    </> 
  )
}

export default VerticalNavBar;