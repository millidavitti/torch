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
			IDD: "home",
			path: "/",
			name: "Home",
			isDropDown: false,
			categories: { data: [] },
			archives: { data: [] },
		},
		{
			id: 2,
			IDD: "categories",

			path: "category",
			name: "Categories",
			isDropDown: true,
			categories: {
				data: [
					{ id: 1, IDN: "Fashion" },
					{ id: 2, IDN: "Travel" },
					{ id: 3, IDN: "Health" },
					{ id: 4, IDN: "Technology" },
				],
			},
			archives: { data: [] },
		},
		{
			id: 3,
			IDD: "author",
			path: "/",
			name: "Author",
			isDropDown: false,
			categories: { data: [] },
			archives: { data: [] },
		},
		{
			id: 4,
			IDD: "archives",
			path: "/",
			name: "Archive",
			isDropDown: true,
			categories: { data: [] },
			archives: {
				data: [
					{ id: 1, IDN: 2020 },
					{ id: 2, IDN: 2021 },
					{ id: 3, IDN: 2022 },
				],
			},
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
