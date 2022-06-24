import React, { useState } from "react";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";
import DropMenu from "./DropMenu";

export default function DeskMenuItem(props) {
	const [showDrop, setShowDrop] = useState(false);
	const { id, to, text } = props;
	function active(id) {
		console.log(id);
	}

	function drop(event) {
		const { target } = event;
		const targetMenu = target.closest("li[data-menu='2']");
		if (!targetMenu) return;
		setShowDrop(true);
	}

	function seal(event) {
		const { target } = event;
		const targetMenu = target.closest("li[data-menu='2']");
		if (!targetMenu) return;
		setShowDrop(false);
	}
	const obj = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

	const drops = obj.map(({ id }) => <DropMenu key={id} />);

	return (
		<li
			className='desk-menu-item'
			onClick={active.bind(null, id)}
			onMouseEnter={drop}
			onMouseLeave={seal}
			data-menu={id}
		>
			<Link to={to}>{text}</Link>
			{showDrop && <DropDown>{drops}</DropDown>}
		</li>
	);
}
