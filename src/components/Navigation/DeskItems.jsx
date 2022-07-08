import React from "react";
import DeskMenuItem from "components/Navigation/DeskMenuItem";
import { FacebookLogo, TwitterLogo } from "phosphor-react";

export default function DeskItems({ menu }) {
	const renderDeskItems = menu.map(({ id, attributes }) => (
		<DeskMenuItem key={id} attributes={attributes} />
	));

	return (
		<nav className='desk-nav'>
			<ul className='desk-menu-items'>{renderDeskItems}</ul>
			<div className='desk-socials'>
				<FacebookLogo size={30} color='#273136' />
				<TwitterLogo size={30} color='#273136' />
			</div>
		</nav>
	);
}
