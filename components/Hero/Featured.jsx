import React from "react";
import Author from "../Reuse/Author";
import hero from "./hero.module.css";
import Link from "next/link";

import { mockPosts } from "../../serverless/mock";

export default function Featured() {
	return (
		<Link href={`/post/${mockPosts[0].title}`}>
			<a className={hero.post}>
				<h2 className={hero.postHead}>{mockPosts[0].title}</h2>
				<img src={mockPosts[0].thumb} alt='' className={hero.postThumb} />
				<Author
					cssWrap={hero.authorInfo}
					cssAvatar={hero.avatar}
					cssName={hero.name}
					src={mockPosts[0].author.avatar}
					name={mockPosts[0].author.name}
				/>
			</a>
		</Link>
	);
}
