import React, { useState } from "react";
// Components
import MobileNav from "components/Navigation/MobileNav";
import DeskItems from "components/Navigation/DeskItems";

import { ReactComponent as Logo } from "assets/logo.svg";
export default function Header() {
	const [menuItems] = useState([
		{ id: 1, to: "/", text: "Home", isDropDown: false },
		{ id: 2, to: "category", text: "Category", isDropDown: true },
		{ id: 3, to: "/", text: "Author", isDropDown: false },
		{ id: 4, to: "/", text: "Archive", isDropDown: false },
	]);
	return (
		<header>
			<Logo className='logo' />
			<MobileNav Logo={Logo} menuItems={menuItems} />
			<DeskItems menuItems={menuItems} />
		</header>
	);
}
