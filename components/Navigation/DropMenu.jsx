import React from "react";
import Link from "next/link";

export default function DropMenu({ category }) {
	return (
		<Link href={`/category/${category.id}`}>
			<a>{category.name}</a>
		</Link>
	);
}
