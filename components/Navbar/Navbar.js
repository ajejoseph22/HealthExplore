import { useState } from 'react';

import { Mobile, Desktop, Actions, Burger, Logo } from '@/components/Navbar';


/**
 * Navbar
 */
const Navbar = props => {
	const [isMobileVisible, setMobileVisible] = useState(false);

	const toggleMobile = () => {
		setMobileVisible(visible => !visible);
	}

	return (
		<div id="navbar">
			<div className="container">
				<Burger onClick={ toggleMobile } />
				<Logo />
				<Desktop />
				<Actions />
			</div>
			{ isMobileVisible && <Mobile /> }
		</div>
	)
}

export default Navbar;