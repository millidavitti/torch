import React from "react";
import Link from "next/link";
// Components
import MobileNav from "../Navigation/MobileNav";
import DeskItems from "../Navigation/DeskItems";
import Logo from "../../public/assets/logo.svg";
import { mockPosts } from "../../serverless/mock";

export default function Header() {
	return (
		<header>
			<Link href='/'>
				<a>
					<Logo className='logo' />
				</a>
			</Link>
			{/* <MobileNav Logo={Logo} menu={mockPosts[0].categories} /> */}
			{/* <DeskItems menu={mockPosts[0].categories} /> */}
		</header>
	);
}
