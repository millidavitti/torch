import React, { useState } from "react";
import { Link } from "react-router-dom";

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
			<Link to='/'>
				<Logo className='logo' />
			</Link>
			<MobileNav Logo={Logo} menuItems={menuItems} />
			<DeskItems menuItems={menuItems} />
		</header>
	);
}
