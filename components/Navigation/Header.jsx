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
	console.log("Header: ", isLoading);

	if (isLoading) return;
	console.log("Header: ", menus);

	return (
		<header>
			<Link href='/'>
				<a>
					<Logo className='logo' />
				</a>
			</Link>
			{/* <MobileNav menu={mockPosts[0].categories}>
				{menus.map((menu) => (
					<MobileMenuItem key={menu._id} menu={menu} />
				))}
			</MobileNav> */}
			<DeskItems>
				{menus.map((menu) => (
					<DeskMenuItem key={menu._id} menu={menu.menu} />
				))}
			</DeskItems>
		</header>
	);
}
