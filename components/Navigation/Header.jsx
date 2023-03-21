import React, { useState } from "react";
import Link from "next/link";
// Components
import MobileNav from "../Navigation/MobileNav";
import DeskItems from "../Navigation/DeskItems";
import DeskMenuItem from "./DeskMenuItem";
import MobileMenuItem from "./MobileMenuItem";
import Logo from "../../public/assets/logo.svg";
import useSWR from "swr";

export default function Header() {
	const [mobileMenuState, setMobileMenuState] = useState({ isClosed: true });
	const { data: menus, isLoading } = useSWR(`/api/menus`);

	function toggleMenu() {
		setMobileMenuState((pre) => ({ ...pre, isClosed: !pre.isClosed }));
	}
	if (isLoading) return;

	return (
		<header>
			<Link href='/'>
				<a>
					<Logo className='logo' />
				</a>
			</Link>
			<MobileNav toggleMenu={toggleMenu} mobileMenuState={mobileMenuState}>
				{menus.map((menu) => (
					<MobileMenuItem
						key={menu._id}
						menu={menu.menu}
						toggleMenu={toggleMenu}
					/>
				))}
			</MobileNav>
			<DeskItems>
				{menus.map((menu) => (
					<DeskMenuItem key={menu._id} menu={menu.menu} />
				))}
			</DeskItems>
		</header>
	);
}
