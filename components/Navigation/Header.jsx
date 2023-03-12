import React from "react";
import Link from "next/link";
// Components
import MobileNav from "../Navigation/MobileNav";
import DeskItems from "../Navigation/DeskItems";
import DeskMenuItem from "./DeskMenuItem";
import Logo from "../../public/assets/logo.svg";
import { mockPosts } from "../../serverless/mock";
import useSWR from "swr";

export default function Header() {
	const { data: menus, isLoading } = useSWR(`api/menus`);
	if (isLoading) return;

	return (
		<header>
			<Link href='/'>
				<a>
					<Logo className='logo' />
				</a>
			</Link>
			{/* <MobileNav menu={mockPosts[0].categories} /> */}
			<DeskItems>
				{menus.map((menu) => (
					<DeskMenuItem key={menu._id} menu={menu} />
				))}
			</DeskItems>
		</header>
	);
}
