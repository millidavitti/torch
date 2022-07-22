import React from "react";

import PostDate from "./Date";
import trend from "./CSS/trend.module.css";
import Link from "next/link";

export default function TrendingPost({ id, url, title, publishedAt }) {
	return (
		<Link href={`/post/${id}`}>
			<a className={trend.link}>
				<div className={trend.trendingPosts}>
					<img src={url} alt='' className={trend.thumb} />
					<div className={trend.postAndDate}>
						<p>{title}</p>
						<PostDate
							css={trend.date}
							date={new Date(publishedAt).toDateString()}
						/>
					</div>
				</div>
			</a>
		</Link>
	);
}
