import React from "react";
import TrendingPost from "./TrendingPost";
import TopTrend from "./TopTrend";

export default function TrendsWrap({ posts }) {
	const renderTrends = JSON.parse(posts).map((post) => {
		return (
			<TrendingPost
				key={post.title}
				id={post.title}
				title={post.title}
				publishedAt={post.published}
				url={"url"}
			/>
		);
	});
	return <TopTrend>{renderTrends}</TopTrend>;
}
