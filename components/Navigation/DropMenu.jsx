import React from "react";
import Link from "next/Link";

export default function DropMenu({ closeMenu, IDN, path }) {
	return (
		<Link href={`/category/${path}`}>
			<a onClick={closeMenu}>{IDN}</a>
		</Link>
	);
}
