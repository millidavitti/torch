import React from "react";
import { Link } from "react-router-dom";

export default function DropMenu(props) {
	const { closeMenu, IDN } = props;
	return (
		<Link to='post' onClick={closeMenu}>
			{IDN}
		</Link>
	);
}
