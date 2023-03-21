import React from "react";
import Link from "next/link";

export default function DropMenu({ menu }) {
	return (
		<Link href={`/category/${menu._id}`}>
			<a>{menu.name}</a>
		</Link>
	);
}
