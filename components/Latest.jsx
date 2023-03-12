import React from "react";
import Author from "./Reuse/Author";
import PostDate from "./Reuse/Date";
import Post from "./Reuse/Post";
import PostFlex from "./Reuse/PostFlex";
import PostInfo from "./Reuse/PostInfo";
import ReadMore from "./Reuse/ReadMore";
import TitlePreview from "./Reuse/TitlePreview";
import postcss from "./Reuse/CSS/post.module.css";
import { MoonLoader } from "react-spinners";
import Thumbnail from "./Reuse/Thumbnail";
import PostWrap from "./Reuse/PostWrap";
import readmore from "./Reuse/CSS/readmore.module.css";
import useSWR from "swr";

export default function Latest({ posts }) {
	const parsedPosts = JSON.parse(posts);
	// const {from, limit} = useRouter().query;
	const { data, error } = useSWR(`/api/posts`);

	return (
		<>
			{/* Most Recent */}
			<PostFlex>
				<div className={postcss.thumbWrap}>
					<img
						src={parsedPosts[0].thumb}
						alt={parsedPosts[0].title}
						className={postcss.thumb}
					/>

					{/* Author */}
					<Author
						name={parsedPosts[0].author.name}
						src={parsedPosts[0].author.avatar}
					/>
				</div>
				<PostInfo>
					<PostDate
						css={postcss.date}
						date={new Date(parsedPosts[0].published).toDateString()}
						head={true}
					/>
					<TitlePreview
						title={parsedPosts[0].title}
						preview={parsedPosts[0].snippet}
					/>
					<ReadMore postID={parsedPosts[0]._id} />
				</PostInfo>
			</PostFlex>

			{/* Others */}
			<PostWrap>
				<PostFlex>
					{JSON.parse(posts).map((post) => {
						return (
							<Post key={post.title}>
								<Thumbnail src={post.thumb} alt={post.title} />
								<PostInfo>
									<PostDate
										date={new Date(post.published).toDateString()}
										head={false}
									/>
									<div style={{ display: "flex", gap: "7px" }}>
										{post.categories.map((category) => (
											<h2
												key={category.name}
												className={postcss.singlePostHead}
											>
												{category.name}
											</h2>
										))}
									</div>
									<TitlePreview title={post.title} preview={post.snippet} />
									<ReadMore postID={post._id} />
								</PostInfo>
							</Post>
						);
					})}
				</PostFlex>

				{/* Load More */}
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
