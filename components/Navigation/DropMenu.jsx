import React from "react";
import Link from "next/link";

export default function DropMenu({ menu, parent }) {
	return (
		<Link href={`/${parent.id}/${menu._id}`}>
			<a>{menu.name}</a>
		</Link>
	);
}
