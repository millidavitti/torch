import React, { useState } from "react";
import Link from "next/link";
import DropDown from "./DropDown";
import DropMenu from "./DropMenu";
import { signIn, useSession } from "next-auth/react";

export default function MobileMenuItem({ menu: parent, toggleMenu }) {
	const [showDrop, setShowDrop] = useState(false);
	const session = useSession();

	const paragraphStyle = {
		color: "var(--secondary)",
		fontSize: "1.3rem",
		cursor: "pointer",
	};

	return (
		<li className='mobile-menu-item'>
			{parent.isdropDown ? (
				/* For Dropdown Menus */
				<div style={paragraphStyle} onClick={() => setShowDrop((pre) => !pre)}>
					<p>{parent.name}</p>

					{showDrop && (
						<DropDown toggleMenu={toggleMenu}>
							{parent.dropItems.map((menu) => (
								<DropMenu key={menu._id} menu={menu} parent={parent} />
							))}
						</DropDown>
					)}
				</div>
			) : parent.id === "author" ? (
				!session.data ? (
					<a
						href=''
						className='mobile-menu-item'
						onClick={() => {
							if (!session.data) signIn(null, { callbackUrl: "/author" });
						}}
					>
						{parent.name}
					</a>
				) : (
					<Link href={`/${parent.id}`}>
						<a className='mobile-menu-item'>{parent.name}</a>
					</Link>
				)
			) : (
				<Link href={`/${parent.id}`}>
					<a className='mobile-menu-item'>{parent.name}</a>
				</Link>
			)}
		</li>
	);
}
