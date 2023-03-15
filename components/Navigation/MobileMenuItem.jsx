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
			{menu.isDropDown ? (
				<div style={paragraphStyle} onClick={() => setShowDrop((pre) => !pre)}>
					<p>{menu.name}</p>

					{/* For Dropdown Menus */}
					{showDrop && (
						<DropDown>
							{menu.dropItems.map((item) => (
								<DropMenu key={id} item={item} />
							))}
						</DropDown>
					)}
				</div>
			) : (
				<Link href={`${path}`}>
					<a onClick={closeMenu}>{name}</a>
				</Link>
			)}
		</li>
	);
}
