import React from "react";
import { InstagramLogo, TwitterLogo } from "phosphor-react";

export default function DeskItems({ children }) {
	return (
		<nav className='desk-nav'>
			<ul className='desk-menu-items'>{children}</ul>
			<div className='desk-socials'>
				<a href='https://www.instagram.com/milli_davitti/'>
					<InstagramLogo size={30} color='#273136' />
				</a>
				<a href='https://twitter.com/GIGO_22'>
					<TwitterLogo size={30} color='#273136' />
				</a>
			</div>
		</nav>
	);
}
