import React from "react";
import Author from "../Reuse/Author";
import hero from "./hero.module.css";
import Link from "next/link";

export default function Featured({ post }) {
	return (
		<Link href={`/post/${JSON.parse(post).title}`}>
			<a className={hero.post}>
				<h2 className={hero.postHead}>{JSON.parse(post).title}</h2>
				<img src={JSON.parse(post).thumb} alt='' className={hero.postThumb} />
				<Author
					cssWrap={hero.authorInfo}
					cssAvatar={hero.avatar}
					cssName={hero.name}
					src={JSON.parse(post).author?.avatar}
					name={JSON.parse(post).author?.name}
				/>
			</a>
		</Link>
	);
}
