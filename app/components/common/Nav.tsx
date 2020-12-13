import React from "react";
import { ButtonOutlined } from "./ButtonOutlined";
import clsx from "clsx";

interface IUserAvatarProps {
  className?: string;
}
const UserAvatar = (props: IUserAvatarProps) => (
  <div
    className={clsx(
      props.className,
      "bg-blue-500 text-white rounded-full text-sm px-2 py-2 relative"
    )}
  >
    JO
    <div
      className="absolute rounded-full px-0.5 py-0.5 bg-white"
      style={{ top: "-4px", right: "-4px" }}
    >
      <div className="bg-red-500 rounded-full px-1 text-xs">2</div>
    </div>
  </div>
);

const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -53 384 384"
    className="w-5 h-5 mr-4"
  >
    <path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
    <path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
    <path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
  </svg>
);

export const Nav = () => (
  <div className="flex px-6 md:px-10 py-4 items-center justify-between lg:justify-start">
    <div className="flex">
      <div className="sm:hidden">
        <MenuIcon />
      </div>
      <p className="uppercase text-blue-500 font-semibold">
        <a href="#">Health Explore</a>
      </p>
    </div>
    <ul className="flex flex-grow justify-center items-center hidden lg:flex">
      <li className="px-8">
        <a href="#" className="text-sm font-semibold uppercase hover:underline">
          Profile
        </a>
      </li>
      <li className="px-8">
        <a href="#" className="text-sm font-semibold uppercase hover:underline">
          Jobs
        </a>
      </li>
      <li className="px-8">
        <a href="#" className="text-sm font-semibold uppercase hover:underline">
          Professional network
        </a>
      </li>
      <li className="px-8">
        <a href="#" className="text-sm font-semibold uppercase hover:underline">
          Lounge
        </a>
      </li>
      <li className="px-8">
        <a href="#" className="text-sm font-semibold uppercase hover:underline">
          Salary
        </a>
      </li>
    </ul>
    <div className="flex items-center">
      <ButtonOutlined className="hidden lg:block">
        <span className="uppercase">Create job</span>
      </ButtonOutlined>
      <UserAvatar className="lg:mx-10" />
      <a
        href="#"
        className="text-sm font-semibold uppercase hover:underline hidden lg:block"
      >
        Logout
      </a>
    </div>
  </div>
);
