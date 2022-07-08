import React from "react";
import { Link } from "react-router-dom";

export default function DropMenu({ closeMenu, IDN, path }) {
	return (
		<Link to={`categories/${path}`} onClick={closeMenu}>
			{IDN}
		</Link>
	);
}
