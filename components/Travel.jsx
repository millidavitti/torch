import React from "react";
import Grid from "./Reuse/Grid";
import Margin from "./Reuse/Margin";
import ReadMore from "./Reuse/ReadMore";
import Thumbnail from "./Reuse/Thumbnail";
import TitlePreview from "./Reuse/TitlePreview";
import travel from "./Reuse/CSS/travel.module.css";
import Link from "next/link";
import { mockPosts } from "../serverless/mock";

export default function Travel({ posts }) {
	return (
		<Grid>
			<div className={travel.mid}>
				<Margin>
					<TitlePreview
						title={JSON.parse(posts)[0].title}
						preview={JSON.parse(posts)[0].snippet}
					/>
					<ReadMore postID={JSON.parse(posts)[0]._id} />
					<Margin>
						<Thumbnail src={JSON.parse(posts)[0].thumb} />
					</Margin>
				</Margin>
			</div>
			{/* For Widths < 1024px */}
			<div className={travel.flexRow}>
				<Link href={`/post/${JSON.parse(posts)[1]._id}`}>
					<a>
						<Thumbnail src={JSON.parse(posts)[1].thumb} />
						<TitlePreview
							cssWrap={travel.wrapTp}
							cssTitle={travel.title}
							cssPreview={travel.postPreview}
							title={JSON.parse(posts)[1].title}
						/>
					</a>
				</Link>
				<Link href={`/post/${JSON.parse(posts)[2]._id}`}>
					<a>
						<Thumbnail src={JSON.parse(posts)[2].thumb} />
						<TitlePreview
							cssWrap={travel.wrapTp}
							cssTitle={travel.title}
							cssPreview={travel.postPreview}
							title={JSON.parse(posts)[2].title}
						/>
					</a>
				</Link>
			</div>
			{/* For Widths >= than 1024px */}
			<div className={travel.left}>
				<Link href={`/post/${JSON.parse(posts)[1]._id}`}>
					<a>
						<Thumbnail src={JSON.parse(posts)[1].thumb} />
						<TitlePreview
							cssWrap={travel.wrapTp}
							cssTitle={travel.title}
							cssPreview={travel.postPreview}
							title={JSON.parse(posts)[1].title}
						/>
					</a>
				</Link>
			</div>
			<div className={travel.right}>
				<Link href={`/post/${JSON.parse(posts)[2]._id}`}>
					<a>
						<TitlePreview
							cssWrap={travel.wrapTp}
							cssTitle={travel.title}
							cssPreview={travel.postPreview}
							title={JSON.parse(posts)[2].title}
						/>
						<Thumbnail src={JSON.parse(posts)[2].thumb} />
					</a>
				</Link>
			</div>
		</Grid>
	);
}
