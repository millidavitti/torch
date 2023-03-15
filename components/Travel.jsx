import React from "react";
import Grid from "./Reuse/Grid";
import Margin from "./Reuse/Margin";
import ReadMore from "./Reuse/ReadMore";
import Thumbnail from "./Reuse/Thumbnail";
import TitlePreview from "./Reuse/TitlePreview";
import travel from "./Reuse/CSS/travel.module.css";
import Link from "next/link";
import { mockPosts } from "../serverless/mock";
import SectionHeader from "./Reuse/SectionHeader";

export default function Travel({ posts }) {
	const parsedPosts = JSON.parse(posts);

	return (
		<>
			<SectionHeader
				text={parsedPosts[0].categories[0].name}
				description={`Get the most benificial ${parsedPosts[0].categories[0].name.toLowerCase()} articles`}
			/>
			<Margin>
				<Grid>
					<div className={travel.mid}>
						<Margin>
							<TitlePreview
								title={parsedPosts[0].title}
								preview={parsedPosts[0].snippet}
							/>
							<ReadMore postID={parsedPosts[0]._id} />
							<Margin>
								<Thumbnail src={parsedPosts[0].thumb} />
							</Margin>
						</Margin>
					</div>
					{/* For Widths < 1024px */}
					<div className={travel.flexRow}>
						<Link href={`/post/${parsedPosts[1]._id}`}>
							<a>
								<Thumbnail src={parsedPosts[1].thumb} />
								<TitlePreview
									cssWrap={travel.wrapTp}
									cssTitle={travel.title}
									cssPreview={travel.postPreview}
									title={parsedPosts[1].title}
								/>
							</a>
						</Link>
						<Link href={`/post/${parsedPosts[2]._id}`}>
							<a>
								<Thumbnail src={parsedPosts[2].thumb} />
								<TitlePreview
									cssWrap={travel.wrapTp}
									cssTitle={travel.title}
									cssPreview={travel.postPreview}
									title={parsedPosts[2].title}
								/>
							</a>
						</Link>
					</div>
					{/* For Widths >= than 1024px */}
					<div className={travel.left}>
						<Link href={`/post/${parsedPosts[1]._id}`}>
							<a>
								<Thumbnail src={parsedPosts[1].thumb} />
								<TitlePreview
									cssWrap={travel.wrapTp}
									cssTitle={travel.title}
									cssPreview={travel.postPreview}
									title={parsedPosts[1].title}
								/>
							</a>
						</Link>
					</div>
					<div className={travel.right}>
						<Link href={`/post/${parsedPosts[2]._id}`}>
							<a>
								<TitlePreview
									cssWrap={travel.wrapTp}
									cssTitle={travel.title}
									cssPreview={travel.postPreview}
									title={parsedPosts[2].title}
								/>
								<Thumbnail src={parsedPosts[2].thumb} />
							</a>
						</Link>
					</div>
				</Grid>
			</Margin>
		</>
	);
}
