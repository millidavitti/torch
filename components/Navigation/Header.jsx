import React from "react";
import Link from "next/link";
// Components
import MobileNav from "../Navigation/MobileNav";
import DeskItems from "../Navigation/DeskItems";
import DeskMenuItem from "./DeskMenuItem";
import MobileMenuItem from "./MobileMenuItem";
import Logo from "../../public/assets/logo.svg";
import useSWR from "swr";

export default function Header() {
	const { data: menus, isLoading } = useSWR(`/api/menus`);

	if (isLoading) return;

	return (
		<header>
			<Link href='/'>
				<a>
					<Logo className='logo' />
				</a>
			</Link>
			<MobileNav menu={menus}>
				{menus.map((menu) => (
					<MobileMenuItem key={menu._id} menu={menu.menu} />
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
