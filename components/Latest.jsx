import React from "react";
import Author from "./Reuse/Author";
import PostDate from "./Reuse/Date";
import Post from "./Reuse/Post";
import PostFlex from "./Reuse/PostFlex";
import PostInfo from "./Reuse/PostInfo";
import ReadMore from "./Reuse/ReadMore";
import TitlePreview from "./Reuse/TitlePreview";
import post from "./Reuse/CSS/post.module.css";
import { MoonLoader } from "react-spinners";
import Thumbnail from "./Reuse/Thumbnail";
import PostWrap from "./Reuse/PostWrap";
import readmore from "./Reuse/CSS/readmore.module.css";
import { mockPosts } from "../serverless/mock";

export default function Latest() {
	const flexPosts = mockPosts.map((post) => {
		return (
			<Post key={post.title}>
				<Thumbnail src={"url"} alt={"me"} />
				<PostInfo>
					<PostDate
						date={new Date(post.published).toDateString()}
						head={false}
					/>
					<div style={{ display: "flex", gap: "7px" }}>
						{post.categories.map((category) => (
							<h2 key={category} className={post.singlePostHead}>
								{category}
							</h2>
						))}
					</div>
					<TitlePreview title={post.title} preview={post.snippet} />
					<ReadMore postID={post.title} />
				</PostInfo>
			</Post>
		);
	});

	return (
		<>
			{/* Most Recent */}
			<PostFlex>
				<div className={post.thumbWrap}>
					<img src={"url"} alt='' className={post.thumb} />

					<Author
						cssWrap={post.wrapAuth}
						cssAvatar={post.avatar}
						cssName={post.name}
						name={mockPosts[0].author.name}
						src={mockPosts[0].author.avatar}
					/>
				</div>
				<PostInfo>
					<PostDate
						css={post.date}
						date={new Date(mockPosts[0].published).toDateString()}
						head={true}
					/>
					<TitlePreview
						title={mockPosts[0].title}
						preview={mockPosts[0].snippet}
					/>
					<ReadMore postID={mockPosts[0].title} />
				</PostInfo>
			</PostFlex>

			{/* Others */}
			<PostWrap>
				<PostFlex>{flexPosts}</PostFlex>
				{
					<button
						className={readmore.readMore}
						style={{ left: "43%", width: "auto" }}
					>
						{true ? (
							<MoonLoader
								cssOverride={{ margin: "auto", left: "40%" }}
								color='var(--secondary)'
								size={15}
							/>
						) : (
							"Load More"
						)}
					</button>
				}
			</PostWrap>
		</>
	);
}
