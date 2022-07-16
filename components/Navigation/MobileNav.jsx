import React, { useState } from "react";
import { List, XCircle, FacebookLogo, TwitterLogo } from "phosphor-react";

import MobileMenuItem from "../Navigation/MobileMenuItem";

export default function MobileNav(props) {
	const { Logo, menu } = props;

	const [mobileMenuState, setMobileMenuState] = useState({ isClosed: true });
	function showMenu() {
		setMobileMenuState((pre) => ({ ...pre, isClosed: !pre.isClosed }));
	}

	function closeMenu() {
		setMobileMenuState((pre) => ({ ...pre, isClosed: !pre.isClosed }));
	}

	// Dynamic class logic
	const show = mobileMenuState.isClosed ? "" : "show";
	const hideOverlay = !mobileMenuState.isClosed ? "hide-overlay" : "";

	const renderMenuItems = menu.map(({ id, attributes }) => {
		return (
			<MobileMenuItem
				key={id}
				id={id}
				attributes={attributes}
				closeMenu={closeMenu}
			/>
		);
	});

	return (
		<nav className='mobile-nav'>
			<List className='ham' size={35} weight='bold' onClick={showMenu} />
			<div className={`mobile-menu-items ${show}`}>
				<div className='menu-top'>
					<div className='logo-socials'>
						<Logo fill='#273136' width='60px' height='60px' />
						<div>
							<FacebookLogo size={30} color='var(--secondary)' />
							<TwitterLogo size={30} color='var(--secondary)' />
						</div>
					</div>
					<XCircle className='close' weight='thin' onClick={closeMenu} />
				</div>
				<div className='mobile-items-wrap'>
					<ul>{renderMenuItems}</ul>
				</div>
			</div>
			<div className={`overlay ${hideOverlay}`}></div>
		</nav>
	);
}
