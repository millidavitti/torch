import React from "react";
import readmore from "./CSS/readmore.module.css";
import Link from "next/link";

export default function ReadMore({ postID }) {
	return (
		<Link href={`/post/${postID}`}>
			<a className={readmore.readMore}>Read More</a>
		</Link>
	);
}
