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
import Link from "next/link";
import SectionHeader from "./Reuse/SectionHeader";

export default function Health({ posts }) {
	const parsedPosts = JSON.parse(posts);

	return (
		<>
			<SectionHeader
				text={parsedPosts[0].categories[0].name}
				description={`Get the most benificial ${parsedPosts[0].categories[0].name.toLowerCase()} articles`}
			/>
			{/* Higlight Post */}
			<Margin>
				<PostFlex>
					<Thumbnail src={parsedPosts[0].thumb} />
					<PostInfo>
						<Author
							cssWrap={health.wrapAuth}
							cssAvatar={health.avatar}
							cssName={health.name}
							name={parsedPosts[0].author.name}
							src={parsedPosts[0].author.avatar}
						/>
						<TitlePreview
							title={parsedPosts[0].title}
							preview={parsedPosts[0].snippet}
						/>
						<ReadMore postID={parsedPosts[0]._id} />
					</PostInfo>
				</PostFlex>
			</Margin>
			{/* Sub Posts */}
			<PostFlex>
				{parsedPosts.slice(1).map((post) => (
					<div key={post.title}>
						<Link href={`/post/${post._id}`}>
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
