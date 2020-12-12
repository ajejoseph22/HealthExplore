import React, { useState } from 'react';

const Footer = props => {
  return (
    <footer className="flex flex-wrap p-8 border-none bg-white">
      <div className="lg:w-3/5 w-full flex flex-col mb-2 p-2">
        <h3 className="text-lg font-semibold">About us</h3>
        <span className="text-sm mt-2">We are a team of nurses, doctors, technologists and executives dedicated to help nurses find jobs that they love.</span>
        <span className="text-sm mt-2">All copyrights reserved ©2020 - Health Explore</span>
      </div>
      <div className="lg:w-1/5 w-full flex flex-col mb-2 p-2">
        <h3 className="text-lg font-semibold">Sitemap</h3>
        <a className="text-sm mt-2" href="#">Nurces</a>
        <a className="text-sm mt-2" href="#">Employes</a>
        <a className="text-sm mt-2" href="#">Social Networking</a>
        <a className="text-sm mt-2" href="#">Jobs</a>
      </div>
      <div className="lg:w-1/5 w-full flex flex-col mb-2 p-2">
        <h3 className="text-lg font-semibold">Privacy Policy</h3>
        <a className="text-sm mt-2" href="#">Terms of Use</a>
        <a className="text-sm mt-2" href="#">Privacy Policy</a>
        <a className="text-sm mt-2" href="#">Cookie Policy</a>
      </div>
    </footer>
  )
}

export default Footer;