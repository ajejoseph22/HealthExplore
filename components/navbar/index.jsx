import React from "react";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <nav className="w-full bg-white py-5 px-4 flex items-center justify-between">
      <h3 className="text-blue-500 uppercase font-bold text-xl">
        Health Explore
      </h3>
      <ul className="flex items-center text-sm list-none uppercase font-medium">
        <li className="mx-6">Profile</li>
        <li className="mx-6">Jobs</li>
        <li className="mx-6">professional network</li>
        <li className="mx-6">lounge</li>
        <li className="mx-6">salary</li>
      </ul>
      <div className="flex items-center">
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
    //
    // <nav
    //     className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white-500 mb-3">
    //     <div className="container px-1 mx-auto flex flex-wrap items-center justify-between">
    //         <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
    //             <a
    //                 className="text-base font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-blue-400"
    //                 href="#"
    //             >
    //                 HEALTH EXPLORE
    //             </a>
    //             <button
    //                 className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
    //                 type="button"
    //                 onClick={() => setNavbarOpen(!navbarOpen)}
    //             >
    //                 <i className="fas fa-bars"/>
    //             </button>
    //         </div>
    //
    //         <div
    //             className={
    //                 "lg:flex flex-grow items-center" +
    //                 (navbarOpen ? " flex" : " hidden")
    //             }
    //             id="example-navbar-danger"
    //         >
    //             <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
    //                 <li className="nav-item">
    //                     <a
    //                         className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
    //                         href="#"
    //                     >
    //                         <span
    //                             className="ml-2">profile</span>
    //                     </a>
    //                 </li>
    //
    //                 <li className="nav-item">
    //                     <a
    //                         className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
    //                         href="#"
    //                     >
    //                         <span
    //                             className="ml-2">jobs</span>
    //                     </a>
    //                 </li>
    //
    //                 <li className="nav-item">
    //                     <a
    //                         className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
    //                         href="#"
    //                     >
    //                         <span
    //                             className="ml-2">professional network</span>
    //                     </a>
    //                 </li>
    //
    //                 <li className="nav-item">
    //                     <a
    //                         className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
    //                         href="#"
    //                     >
    //                         <span
    //                             className="ml-2">lounge</span>
    //                     </a>
    //                 </li>
    //
    //                 <li className="nav-item">
    //                     <a
    //                         className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
    //                         href="#"
    //                     >
    //                         <span
    //                             className="ml-2">salary</span>
    //                     </a>
    //                 </li>
    //             </ul>
    //         </div>
    //
    //         <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block">
    //             <button
    //                 className="text-blue-400 uppercase cursor-pointer text-xs px-3 py-1 bg-white border border-blue-400 rounded"
    //             >
    //                 create job
    //             </button>
    //
    //             <button
    //                 className="text-black uppercase cursor-pointer text-xs px-3 py-1 rounded bg-transparent block"
    //                 type="button"
    //             >
    //
    //             </button>
    //
    //             <button
    //                 className="text-black uppercase cursor-pointer text-xs px-3 py-1 rounded bg-transparent block"
    //                 type="button"
    //             >
    //                 logout
    //             </button>
    //         </div>
    //     </div>
    // </nav>
  );
}
