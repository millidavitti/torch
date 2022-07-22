import React, { useState } from "react";
import Link from "next/link";
import DropDown from "./DropDown";
import DropMenu from "./DropMenu";

export default function MobileMenuItem({ attributes, closeMenu }) {
	const { path, name, isDropDown } = attributes;
	let drops;

	const [showDrop, setShowDrop] = useState(false);

	const pStyle = {
		color: "var(--secondary)",
		fontSize: "1.3rem",
		cursor: "pointer",
	};

	if (isDropDown) {
		drops = attributes[attributes.IDD]?.data.map(({ id, attributes }) => (
			<DropMenu
				key={id}
				closeMenu={closeMenu}
				IDN={attributes.IDN}
				path={attributes.path}
			/>
		));
	}

	return (
		<li className='mobile-menu-item'>
			{isDropDown ? (
				<div style={pStyle} onClick={() => setShowDrop((pre) => !pre)}>
					<p>{name}</p>
					{/* For Dropdown Menus */}
					{showDrop && <DropDown>{drops}</DropDown>}
				</div>
			) : (
				<Link href={`${path}`}>
					<a onClick={closeMenu}>{name}</a>
				</Link>
			)}
		</li>
	);
}
