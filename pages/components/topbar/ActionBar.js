import React, { useState } from 'react';

const ActionBar = props => {
  return (
    <div className="flex space-x-6 items-center">
      <a href="#" className="hidden lg:flex border rounded-md border-blue-600 pl-1 pr-1 pt-2 pb-2">
        <span className="text-center text-blue-600 font-semibold">CREATE JOB</span>
      </a>
      <a href="#" className="inline-block relative">
        <div className="h-10 w-10 rounded-full bg-blue-600 border border-white flex items-center justify-center">
          <span className="text-white text-sm">Jo</span>  
        </div>
        <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-red-600 border border-white flex items-center justify-center">
          <span className="text-white text-xs">7</span>  
        </span>
      </a>
      <a href="#">
        <h4 className="hidden lg:flex font-semibold">LOGOUT</h4>
      </a>
    </div>
  )
}

export default ActionBar;