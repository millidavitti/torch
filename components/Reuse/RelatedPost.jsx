import React from "react";
import PostDate from "./Date";
import Post from "./Post";
import PostFlex from "./PostFlex";
import PostInfo from "./PostInfo";
import ReadMore from "./ReadMore";
import Thumbnail from "./Thumbnail";
import TitlePreview from "./TitlePreview";
import post from "./CSS/post.module.css";
import { mockPosts } from "../../serverless/mock";

export default function RelatedPost({ category }) {
	const flexPosts = [];
	for (let i = 0; i < mockPosts.length; i++) {
		mockPosts[i];
		if (mockPosts[0].title)
			flexPosts.push(
				<Post key={mockPosts[0].title}>
					<Thumbnail src={"url"} />
					<PostInfo>
						<PostDate
							date={new Date(mockPosts[0].published).toDateString()}
							head={false}
						/>
						<h2 className={post.singlePostHead}>
							{mockPosts[0].categories[0]}
						</h2>
						<TitlePreview
							title={mockPosts[0].title}
							preview={mockPosts[0].snippet}
						/>
						<ReadMore postID={mockPosts[0].title} />
					</PostInfo>
				</Post>,
			);
	}
	return <PostFlex>{flexPosts}</PostFlex>;
}
