import React from "react";
import Author from "./Reuse/Author";
import PostDate from "./Reuse/Date";
import Margin from "./Reuse/Margin";
import PostFlex from "./Reuse/PostFlex";
import PostInfo from "./Reuse/PostInfo";
import ReadMore from "./Reuse/ReadMore";
import Thumbnail from "./Reuse/Thumbnail";
import TitlePreview from "./Reuse/TitlePreview";
import health from "./Reuse/CSS/health.module.css";
import { mockPosts } from "../serverless/mock";
import Link from "next/link";

export default function Health() {
	return (
		<>
			<Margin>
				<PostFlex>
					<Thumbnail src={"url"} />
					<PostInfo>
						<Author
							cssWrap={health.wrapAuth}
							cssAvatar={health.avatar}
							cssName={health.name}
							name={mockPosts[0].author.name}
							src={mockPosts[0].author.avatar}
						/>
						<TitlePreview
							title={mockPosts[0].title}
							preview={mockPosts[0].snippet}
						/>
						<ReadMore postID={mockPosts[0].title} />
					</PostInfo>
				</PostFlex>
			</Margin>
			<PostFlex>
				{mockPosts.map((post) => (
					<div key={post.title}>
						<Link href={`/post/${post.title}`}>
							<a>
								<TitlePreview
									cssWrap={`${health.wrapTp} ${health.modWrapTp}`}
									cssTitle={health.title}
									title={post.title}
								/>
							</a>
						</Link>
						<PostDate
							css={health.date}
							date={new Date(post.published).toDateString()}
							head={false}
						/>
					</div>
				))}
			</PostFlex>
		</>
	);
}
