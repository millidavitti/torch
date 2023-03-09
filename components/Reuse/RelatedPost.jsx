import React from "react";
import PostDate from "./Date";
import Post from "./Post";
import PostFlex from "./PostFlex";
import PostInfo from "./PostInfo";
import ReadMore from "./ReadMore";
import Thumbnail from "./Thumbnail";
import TitlePreview from "./TitlePreview";
import post from "./CSS/post.module.css";
import { useRouter } from "next/router";

export default function RelatedPost({ posts }) {
	const { postID } = useRouter().query;
	const flexPosts = [];
	for (let i = 0; i < posts.length; i++) {
		if (posts[i]._id !== postID)
			flexPosts.push(
				<Post key={posts[i].title}>
					<Thumbnail src={posts[i].thumb} />
					<PostInfo>
						<PostDate
							date={new Date(posts[i].published).toDateString()}
							head={false}
						/>
						<h2 className={post.singlePostHead}>
							{posts[i].categories[0].name}
						</h2>
						<TitlePreview title={posts[i].title} preview={posts[i].snippet} />
						<ReadMore postID={posts[i]._id} />
					</PostInfo>
				</Post>,
			);
	}
	return <PostFlex>{flexPosts}</PostFlex>;
}
