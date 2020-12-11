//React
import { useState } from 'react';

//Typography
import Logo from '../typography/Logo';

//Components
import NavItem from './NavItem';
import SecondaryButton from '../buttons/SecondaryButton';
import ProfileButton from '../navigation/ProfileButton';

//Assets
import MenuIcon from '../../assets/icons/hamburger-menu.svg';

//Constants
import { menuItems } from './constants/menuItems';

const NavBar = () => {
    //State
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <>
            {/* Desktop menu */}
            <div className={`flex h-16 justify-between shadow bg-white-500 p-6 md:hidden`}>
                <div className={`flex h-full w-2/12 items-center`}>
                    <Logo>HEALTH EXPLORE</Logo>
                </div>

                <ul className={`flex items-center justify-center space-x-4`}>
                    {menuItems && menuItems.length > 0 ?
                        menuItems.map((item, index) => (
                            <NavItem
                                key={`menu_item_${index}`}
                                title={item.title}
                                route={item.route}
                            />
                        ))
                        : false
                    }
                </ul>

                <div className={`flex h-full items-center space-x-4`}>
                    <SecondaryButton title={'CREATE JOB'} />
                    <ProfileButton initials={'JO'} notifications={2} />
                    <ul>
                        <NavItem title={'LOGOUT'} route={'/'} />
                    </ul>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`hidden h-16 space-x-4 shadow bg-white-500 p-6 md:flex`}>
                <button className={`flex cursor-pointer items-center`} onClick={() => setShowMobileMenu(!showMobileMenu)}>
                    <MenuIcon />
                </button>

                <div className={`flex h-full items-center justify-start`}>
                    <Logo>HEALTH EXPLORE</Logo>
                </div>

                <div className={`flex flex-1 justify-end items-center`}>
                    <ProfileButton initials={'JO'} notifications={2} />
                </div>
            </div>
            <div className={`hidden md:flex absolute flex-col w-full top-16 left-0 ${showMobileMenu ? 'md:flex' : 'md:hidden'} bg-white-500 shadow`}>
                <ul className={`flex flex-col pl-4 mt-4 items-start space-y-4`}>
                    {menuItems && menuItems.length > 0 ?
                        menuItems.map((item, index) => (
                            <NavItem
                                key={`menu_item_${index}`}
                                title={item.title}
                                route={item.route}
                            />
                        ))
                        : false
                    }
                </ul>
                <div className={`mt-8 ml-4 mb-4`}>
                    <SecondaryButton title={'CREATE JOB'} />
                    <ul className={`mt-4 flex flex-col items-start space-y-4`}>
                        <NavItem title={'LOGOUT'} route={'/'} />
                    </ul>
                </div>
            </div>
        </>
    )
}

export default NavBar;