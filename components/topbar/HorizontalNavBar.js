import { useState } from 'react';

const HorizontalNavBar = props => {
  return (
    <>
      <ul className="hidden lg:flex space-x-10 font-semibold uppercase mr-2">
        <li><a href="#">Profile</a></li>
        <li><a href="#">Jobs</a></li>
        <li><a href="#">Professional Network</a></li>
        <li><a href="#">Lounge</a></li>
        <li><a href="#">Salary</a></li>
      </ul>
    </> 
  )
}

export default HorizontalNavBar;