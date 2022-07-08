import React, { useState } from "react";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";
import DropMenu from "./DropMenu";

export default function DeskMenuItem({ attributes }) {
	const { path, name, isDropDown } = attributes;
	const [showDrop, setShowDrop] = useState(false);
	let drops;

	// IDN: IDentification Name
	if (isDropDown) {
		drops = attributes[attributes.IDD]?.data.map(({ id, attributes }) => (
			<DropMenu key={id} IDN={attributes.IDN} path={attributes.path} />
		));
	}

	return (
		<li
			style={{
				display: "flex",
				alignItem: "center",
			}}
		>
			{isDropDown ? (
				<div
					className='desk-menu-item'
					onMouseEnter={() => setShowDrop(true)}
					onMouseLeave={() => setShowDrop(false)}
				>
					{name}
					{/* For Dropdown Menus */}
					{showDrop && <DropDown>{drops}</DropDown>}
				</div>
			) : (
				<Link className='desk-menu-item' to={path}>
					{name}
				</Link>
			)}
		</li>
	);
}
