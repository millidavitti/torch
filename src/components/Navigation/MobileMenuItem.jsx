import React, { useState } from "react";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";

function MobileMenuItem(props) {
	const [showDrop, setShowDrop] = useState(false);

	const { to, text, closeMenu, menu, isDropDown } = props;

	function drop(event) {
		const { target } = event;
		const targetMenu = target.closest("li[data-menu='2']");
		if (!targetMenu) return;
		setShowDrop((pre) => !pre);
	}
	const callBackLogic = isDropDown ? drop : closeMenu;
	const pStyle = {
		color: "var(--secondary)",
		fontSize: "1.3rem",
		cursor: "pointer",
	};

	return (
		<li className='mobile-menu-item' data-menu={menu} onClick={drop}>
			{isDropDown ? (
				<p style={pStyle}>{text}</p>
			) : (
				<Link to={to} onClick={callBackLogic}>
					{text}
				</Link>
			)}
			{showDrop && <DropDown closeMenu={closeMenu} />}
		</li>
	);
}

export default MobileMenuItem;
