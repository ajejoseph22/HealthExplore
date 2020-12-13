import React from "react";

export interface IFooterProps {}
export const Footer = (props: IFooterProps) => {
  return (
    <div className="flex px-10 py-8 flex-col sm:flex-row">
      <div style={{ flex: 2 }} className="pr-8">
        <p className="text-xl font-semibold">About us</p>
        <p className="text-sm pt-2">
          We are a team of nurses, doctors, technologists and executives
          dedicated to help nurses find jobs that they love.
        </p>
        <p className="text-sm pt-2">
          All copyrights reserved © 2020 - Health Explore
        </p>
      </div>
      <div style={{ flex: 1 }} className="mt-6 sm:mt-0">
        <p className="text-xl font-semibold">Sitemap</p>
        <ul>
          <li className="pt-1">
            <a href="#" className="text-sm hover:underline cursor-pointer">
              Nurses
            </a>
          </li>
          <li className="pt-1">
            <a href="#" className="text-sm hover:underline cursor-pointer">
              Employers
            </a>
          </li>
          <li className="pt-1">
            <a href="#" className="text-sm hover:underline cursor-pointer">
              Social networking
            </a>
          </li>
          <li className="pt-1">
            <a href="#" className="text-sm hover:underline cursor-pointer">
              Jobs
            </a>
          </li>
        </ul>
      </div>
      <div style={{ flex: 1 }} className="mt-6 sm:mt-0">
        <p className="text-xl font-semibold">Privacy</p>
        <ul>
          <li className="pt-1">
            <a href="#" className="text-sm hover:underline cursor-pointer">
              Terms of use
            </a>
          </li>
          <li className="pt-1">
            <a href="#" className="text-sm hover:underline cursor-pointer">
              Privacy policy
            </a>
          </li>
          <li className="pt-1">
            <a href="#" className="text-sm hover:underline cursor-pointer">
              Cookie policy
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
