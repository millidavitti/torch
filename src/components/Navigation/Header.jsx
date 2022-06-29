import React from "react";
import { Link } from "react-router-dom";

// Components
import MobileNav from "components/Navigation/MobileNav";
import DeskItems from "components/Navigation/DeskItems";
import { ReactComponent as Logo } from "assets/logo.svg";

export default function Header() {
	const menuItems = [
		{
			id: 1,
			to: "/",
			text: "Home",
			isDropDown: false,
			drops: [],
		},
		{
			id: 2,
			to: "category",
			text: "Categories",
			isDropDown: true,
			drops: [
				{ id: 1, cat: "Fashion" },
				{ id: 2, cat: "Travel" },
				{ id: 3, cat: "Health" },
			],
		},
		{
			id: 3,
			to: "/",
			text: "Author",
			isDropDown: false,
			drops: [],
		},
		{
			id: 4,
			to: "/",
			text: "Archive",
			isDropDown: false,
			drops: [],
		},
	];

	return (
		<header>
			<Link to='home'>
				<Logo className='logo' />
			</Link>
			<MobileNav Logo={Logo} menuItems={menuItems} />
			<DeskItems menuItems={menuItems} />
		</header>
	);
}
