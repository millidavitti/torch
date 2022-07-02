import React, { useState } from "react";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";
import DropMenu from "./DropMenu";

export default function MobileMenuItem({ item, closeMenu }) {
	const { path, name, isDropDown } = item;
	let drops;

	const [showDrop, setShowDrop] = useState(false);

	const pStyle = {
		color: "var(--secondary)",
		fontSize: "1.3rem",
		cursor: "pointer",
	};

	if (isDropDown) {
		drops = item[item.IDD]?.data.map(({ id, IDN }) => (
			<DropMenu key={id} closeMenu={closeMenu} IDN={IDN} />
		));
	}

	return (
		<li className='mobile-menu-item'>
			{isDropDown ? (
				<div
					style={pStyle}
					onClick={() => setShowDrop((pre) => !pre)}
				>
					<p>{name}</p>
					{/* For Dropdown Menus */}
					{showDrop && <DropDown>{drops}</DropDown>}
				</div>
			) : (
				<Link to={path} onClick={closeMenu}>
					{name}
				</Link>
			)}
		</li>
	);
}
