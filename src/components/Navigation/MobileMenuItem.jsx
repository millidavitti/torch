import React, { useState } from "react";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";
import DropMenu from "./DropMenu";

export default function MobileMenuItem(props) {
	const [showDrop, setShowDrop] = useState(false);

	const { to, text, closeMenu, isDropDown } = props;

	const pStyle = {
		color: "var(--secondary)",
		fontSize: "1.3rem",
		cursor: "pointer",
	};

	// Mock Categories
	const obj = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

	const drops = obj.map(({ id }) => (
		<DropMenu key={id} closeMenu={closeMenu} />
	));
	//

	return (
		<li className='mobile-menu-item'>
			{isDropDown ? (
				<p
					style={pStyle}
					onClick={() => setShowDrop((pre) => !pre)}
				>
					{text}
				</p>
			) : (
				<Link to={to} onClick={closeMenu}>
					{text}
				</Link>
			)}
			{/* For Dropdown Menus */}
			{showDrop && <DropDown>{drops}</DropDown>}
		</li>
	);
}
