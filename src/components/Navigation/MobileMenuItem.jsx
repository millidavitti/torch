import React, { useState } from "react";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";
import DropMenu from "./DropMenu";

function MobileMenuItem(props) {
	const [showDrop, setShowDrop] = useState(false);

	const { to, text, closeMenu, menu, isDropDown } = props;

	function drop(event) {
		const { target } = event;
		const targetMenu = target.closest("li[data-menu='2']");
		if (!targetMenu) return;
		setShowDrop((pre) => !pre);
	}

	const pStyle = {
		color: "var(--secondary)",
		fontSize: "1.3rem",
		cursor: "pointer",
	};

	const obj = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

	const drops = obj.map(({ id }) => (
		<DropMenu key={id} closeMenu={closeMenu} />
	));

	return (
		<li className='mobile-menu-item' data-menu={menu} onClick={drop}>
			{isDropDown ? (
				<p style={pStyle}>{text}</p>
			) : (
				<Link to={to} onClick={closeMenu}>
					{text}
				</Link>
			)}
			{showDrop && <DropDown>{drops}</DropDown>}
		</li>
	);
}

export default MobileMenuItem;
