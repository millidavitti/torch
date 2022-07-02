import React, { useState } from "react";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";
import DropMenu from "./DropMenu";

export default function DeskMenuItem({ item }) {
	const { path, name, isDropDown } = item;
	const [showDrop, setShowDrop] = useState(false);
	let drops;

	// IDN: IDentification Name
	if (isDropDown) {
		drops = item[item.IDD]?.data.map(({ id, IDN }) => (
			<DropMenu key={id} IDN={IDN} />
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
