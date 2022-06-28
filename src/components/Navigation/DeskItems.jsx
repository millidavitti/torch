import React from "react";
import DeskMenuItem from "components/Navigation/DeskMenuItem";
import { FacebookLogo, TwitterLogo } from "phosphor-react";

export default function DeskItems(props) {
	const { menuItems } = props;
	const renderDeskItems = menuItems.map((item) => (
		<DeskMenuItem
			key={item.id}
			id={item.id}
			to={item.to}
			text={item.text}
			isDropDown={item.isDropDown}
		/>
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
