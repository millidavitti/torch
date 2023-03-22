import React, { useRef, useState } from "react";
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
import axios from "axios";

export default function Latest({ posts }) {
	const { latestPosts, count } = JSON.parse(posts);
	const [append, setAppend] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	console.log("data: ", count);

	return (
		<>
			{/* Most Recent */}
			<PostFlex>
				<div className={postcss.thumbWrap}>
					<img
						src={latestPosts[0].thumb}
						alt={latestPosts[0].title}
						className={postcss.thumb}
					/>

					{/* Author */}
					<Author
						name={latestPosts[0].author.name}
						src={latestPosts[0].author.avatar}
					/>
				</div>
				<PostInfo>
					<PostDate
						css={postcss.date}
						date={new Date(latestPosts[0].published).toDateString()}
						head={true}
					/>
					<TitlePreview
						title={latestPosts[0].title}
						preview={latestPosts[0].snippet}
					/>
					<ReadMore postID={latestPosts[0]._id} />
				</PostInfo>
			</PostFlex>

			{/* Others */}
			<PostWrap>
				<PostFlex>
					{latestPosts.slice(1).map((post) => {
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
					{append.map((post) => (
						<Post key={post.title}>
							<Thumbnail src={post.thumb} alt={post.title} />
							<PostInfo>
								<PostDate
									date={new Date(post.published).toDateString()}
									head={false}
								/>
								<div style={{ display: "flex", gap: "7px" }}>
									{post.categories.map((category) => (
										<h2 key={category.name} className={postcss.singlePostHead}>
											{category.name}
										</h2>
									))}
								</div>
								<TitlePreview title={post.title} preview={post.snippet} />
								<ReadMore postID={post._id} />
							</PostInfo>
						</Post>
					))}
				</PostFlex>

				{/* Load More */}
				{latestPosts.length + append.length !== count && (
					<button
						className={readmore.readMore}
						style={{ left: "43%", width: "auto" }}
						onClick={async () => {
							setIsLoading(true);
							const { data } = await axios.get(
								`/api/posts?from=${latestPosts.length + append.length}`,
							);
							setIsLoading(false);

							setAppend((prev) => [...prev, ...data]);
						}}
					>
						{isLoading ? (
							<MoonLoader
								cssOverride={{ margin: "0 30px" }}
								color='var(--secondary)'
								size={15}
							/>
						) : (
							"Load More"
						)}
					</button>
				)}
			</PostWrap>
		</>
	);
}
