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
	return (
		<PostFlex>
			{posts.map((post) => (
				<Post key={post._id}>
					<Thumbnail src={post.thumb} />
					<PostInfo>
						<PostDate
							date={new Date(post.published).toDateString()}
							head={false}
						/>
						<h2 className={post.singlePostHead}>{post.categories[0].name}</h2>
						<TitlePreview title={post.title} preview={post.snippet} />
						<ReadMore postID={post._id} />
					</PostInfo>
				</Post>
			))}
		</PostFlex>
	);
}
