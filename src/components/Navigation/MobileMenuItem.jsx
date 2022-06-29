import React, { useState } from "react";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";
import DropMenu from "./DropMenu";

export default function MobileMenuItem(props) {
	const [showDrop, setShowDrop] = useState(false);

	const { to, text, closeMenu, isDropDown, drops } = props;

	const pStyle = {
		color: "var(--secondary)",
		fontSize: "1.3rem",
		cursor: "pointer",
	};

	const rdrops = drops.map(({ id, cat }) => (
		<DropMenu key={id} closeMenu={closeMenu} cat={cat} />
	));
	//

	return (
		<li className='mobile-menu-item'>
			{isDropDown ? (
				<div
					style={pStyle}
					onClick={() => setShowDrop((pre) => !pre)}
				>
					{text}
					{/* For Dropdown Menus */}
					{showDrop && <DropDown>{rdrops}</DropDown>}
				</div>
			) : (
				<Link to={to} onClick={closeMenu}>
					{text}
				</Link>
			)}
		</li>
	);
}
