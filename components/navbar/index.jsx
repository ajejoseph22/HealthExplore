import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full bg-white py-5 px-4 flex items-center justify-between">
      <h3 className="text-blue-500 uppercase font-bold text-xl">
        Health Explore
      </h3>
      <ul className="hidden md:flex items-center text-sm list-none uppercase font-medium">
        <li className="mx-6">Profile</li>
        <li className="mx-6">Jobs</li>
        <li className="mx-6">professional network</li>
        <li className="mx-6">lounge</li>
        <li className="mx-6">salary</li>
      </ul>
      <div className="hidden items-center md:flex">
        <a
          className="bg-white border text-sm border-blue-500 mr-6 rounded-md text-blue-500 px-2 py-1 uppercase"
          href="#"
        >
          create job
        </a>
        <div className="bg-blue-500 rounded-full h-8 w-8 mr-6" />
        <div className="uppercase text-sm font-medium">Logout</div>
      </div>
    </nav>
  );
}
