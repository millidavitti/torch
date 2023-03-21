import React, { useState } from "react";
import { List, XCircle, FacebookLogo, TwitterLogo } from "phosphor-react";
import Logo from "../../public/assets/logo.svg";

import MobileMenuItem from "../Navigation/MobileMenuItem";

export default function MobileNav({ children }) {
	const [mobileMenuState, setMobileMenuState] = useState({ isClosed: true });

	function toggleMenu() {
		setMobileMenuState((pre) => ({ ...pre, isClosed: !pre.isClosed }));
	}

	// Dynamic class logic
	const show = mobileMenuState.isClosed ? "" : "show";
	const hideOverlay = !mobileMenuState.isClosed ? "hide-overlay" : "";

	return (
		<nav className='mobile-nav'>
			<List className='ham' size={35} weight='bold' onClick={toggleMenu} />
			<div className={`mobile-menu-items ${show}`}>
				<div className='menu-top'>
					<div className='logo-socials'>
						<Logo fill='#273136' width='60px' height='60px' />
						<div>
							<FacebookLogo size={30} color='var(--secondary)' />
							<TwitterLogo size={30} color='var(--secondary)' />
						</div>
					</div>
					<XCircle className='close' weight='thin' onClick={toggleMenu} />
				</div>
				<div className='mobile-items-wrap'>
					<ul>{children}</ul>
				</div>
			</div>
			<div className={`overlay ${hideOverlay}`} />
		</nav>
	);
}
