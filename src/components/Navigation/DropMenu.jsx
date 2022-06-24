import React from "react";
import { Link } from "react-router-dom";

export default function DropMenu(props) {
	const { closeMenu } = props;
	return (
		<Link to='category' onClick={closeMenu}>
			Fashion
		</Link>
	);
}