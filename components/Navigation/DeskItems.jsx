import React from "react";
import { FacebookLogo, TwitterLogo } from "phosphor-react";

export default function DeskItems({ children }) {
	return (
		<nav className='desk-nav'>
			<ul className='desk-menu-items'>{children}</ul>
			<div className='desk-socials'>
				<FacebookLogo size={30} color='#273136' />
				<TwitterLogo size={30} color='#273136' />
			</div>
		</nav>
	);
}
