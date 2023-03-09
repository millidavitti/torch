import React from "react";
import TrendingPost from "./TrendingPost";
import TopTrend from "./TopTrend";

export default function TrendsWrap({ posts }) {
	return (
		<TopTrend>
			{JSON.parse(posts).map((post) => {
				return (
					<TrendingPost
						key={post.title}
						id={post._id}
						title={post.title}
						publishedAt={post.published}
						url={post.thumb}
					/>
				);
			})}
		</TopTrend>
	);
}
