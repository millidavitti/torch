import React, { useState } from "react";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";
import DropMenu from "./DropMenu";

export default function DeskMenuItem(props) {
	const { to, text, isDropDown, drops } = props;
	const [showDrop, setShowDrop] = useState(false);


	const rdrops = drops.map(({ id, cat }) => <DropMenu key={id} cat={cat} />);

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
					{text}
					{/* For Dropdown Menus */}
					{showDrop && <DropDown>{rdrops}</DropDown>}
				</div>
			) : (
				<Link className='desk-menu-item' to={to}>
					{text}
				</Link>
			)}
		</li>
	);
}
