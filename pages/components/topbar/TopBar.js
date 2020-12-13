import React, { useState } from 'react';

import VerticalNavBar from './VerticalNavBar';
import HorizontalNavBar from './HorizontalNavBar';
import ActionBar from './ActionBar';

const OpenVerticalNavButton = props => {
  const { open } = props;
  return (
    <button className="block lg:hidden" onClick={() => open()}>
      <i className="fa fa-bars text-base text-black"></i>
    </button>
  )
}

const Title = props => {
  return (
    <h4 className="text-blue-600 text-lg text-center font-semibold uppercase">Health Explore</h4>
  )
}

const TopBar = props => {
  const [isOpenedVerticalNavBar, setIsOpenedVerticalNavBar] = useState(false);

  const openVerticalNavBar = () => {
    setIsOpenedVerticalNavBar(prevOpened => !prevOpened)
  }

  return (
    <>
      <div className="flex justify-between items-center w-full z-50 p-5 text-md top-0 bg-white border-none">
        <OpenVerticalNavButton open={openVerticalNavBar} />
        <Title />
        <HorizontalNavBar />
        <ActionBar />
      </div>
      { isOpenedVerticalNavBar && <VerticalNavBar /> }
    </>
  )
}

export default TopBar;