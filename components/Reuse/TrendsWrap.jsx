import React from "react";
import { gql, useQuery } from "@apollo/client";
import { MoonLoader } from "react-spinners";
import TrendingPost from "./TrendingPost";
import TopTrend from "./TopTrend";
import { mockPosts } from "../../serverless/mock";

export default function TrendsWrap() {
	const renderTrends = mockPosts.map((post) => {
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
