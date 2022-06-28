import React, { useState } from "react";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";
import DropMenu from "./DropMenu";

export default function DeskMenuItem(props) {
	const { id, to, text, isDropDown } = props;
	const [showDrop, setShowDrop] = useState(false);

	const obj = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

	const drops = obj.map(({ id }) => <DropMenu key={id} />);

	return (
		<li
			style={{
				display: "flex",
				alignItem: "center",
				position: "relative",
			}}
			onMouseLeave={() => setShowDrop(false)}
		>
			{isDropDown ? (
				<p
					className='desk-menu-item'
					onMouseEnter={() => setShowDrop(true)}
				>
					{text}
				</p>
			) : (
				<Link className='desk-menu-item' to={to}>
					{text}
				</Link>
			)}
			{/* For Dropdown Menus */}
			{showDrop && <DropDown>{drops}</DropDown>}
		</li>
	);
}
