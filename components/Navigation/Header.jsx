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
	const fetcher = (url) => fetch(url).then((r) => r.json());
	const { data: menus, isLoading } = useSWR(`api/menus`, fetcher);
	if (isLoading) return;
	console.log("Desk Items: ", menus);
	return (
		<header>
			<Link href='/'>
				<a>
					<Logo className='logo' />
				</a>
			</Link>
			{/* <MobileNav Logo={Logo} menu={mockPosts[0].categories} /> */}
			<DeskItems>
				{menus.map((menu) => (
					<DeskMenuItem key={menu._id} menu={menu} />
				))}
			</DeskItems>
		</header>
	);
}
