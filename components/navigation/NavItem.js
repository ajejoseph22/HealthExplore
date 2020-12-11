//Next
import Link from 'next/link';

//Typography
import Heading from '../typography/Heading';

const NavItem = ({ title, route }) => {
    return (
        <li className={`pl-2 pr-2 duration-300 cursor-pointer border-b border-white-500 hover:border-blue-500`}>
            <Link href={route}>
                <a className={`no-underline`}><Heading>{title}</Heading></a>
            </Link>
        </li>
    )
}

export default NavItem;