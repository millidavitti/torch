import React, { useState } from "react";
import Link from "next/link";
import DropDown from "./DropDown";
import DropMenu from "./DropMenu";

export default function MobileMenuItem({ menu, closeMenu }) {
	const [showDrop, setShowDrop] = useState(false);

	const paragraphStyle = {
		color: "var(--secondary)",
		fontSize: "1.3rem",
		cursor: "pointer",
	};

	return (
		<li className='mobile-menu-item'>
			{menu.isdropDown ? (
				/* For Dropdown Menus */
				<div style={paragraphStyle} onClick={() => setShowDrop((pre) => !pre)}>
					<p>{menu.name}</p>

					{showDrop && (
						<DropDown>
							{menu.dropItems.map((menu) => (
								<DropMenu key={menu._id} menu={menu} />
							))}
						</DropDown>
					)}
				</div>
			) : (
				<Link href={`${menu.id}`}>
					<a onClick={closeMenu}>{menu.name}</a>
				</Link>
			)}
		</li>
	);
}
