import React from "react";
import Grid from "./Reuse/Grid";
import Margin from "./Reuse/Margin";
import ReadMore from "./Reuse/ReadMore";
import Thumbnail from "./Reuse/Thumbnail";
import TitlePreview from "./Reuse/TitlePreview";
import travel from "./Reuse/CSS/travel.module.css";
import { useQuery, gql } from "@apollo/client";
import { MoonLoader } from "react-spinners";
import Link from "next/link";
import { mockPosts } from "../serverless/mock";

export default function Travel() {
	return (
		<Grid>
			<div className={travel.mid}>
				<Margin>
					<TitlePreview
						title={mockPosts[0].title}
						preview={mockPosts[0].snippet}
					/>
					<ReadMore postID={mockPosts[0].title} />
					<Margin>
						<Thumbnail src={"url"} />
					</Margin>
				</Margin>
			</div>
			{/* For Widths < 1024px */}
			<div className={travel.flexRow}>
				<Link href={`/post/${mockPosts[0].title}`}>
					<a>
						<Thumbnail src={"url"} />
						<TitlePreview
							cssWrap={travel.wrapTp}
							cssTitle={travel.title}
							cssPreview={travel.postPreview}
							title={mockPosts[0].title}
						/>
					</a>
				</Link>
				<Link href={`/post/${mockPosts[0].title}`}>
					<a>
						<Thumbnail src={"url"} />
						<TitlePreview
							cssWrap={travel.wrapTp}
							cssTitle={travel.title}
							cssPreview={travel.postPreview}
							title={mockPosts[0].title}
						/>
					</a>
				</Link>
			</div>
			{/* For Widths >= than 1024px */}
			<div className={travel.left}>
				<Link href={`/post/${mockPosts[0].title}`}>
					<a>
						<Thumbnail src={"url"} />
						<TitlePreview
							cssWrap={travel.wrapTp}
							cssTitle={travel.title}
							cssPreview={travel.postPreview}
							title={mockPosts[0].title}
						/>
					</a>
				</Link>
			</div>
			<div className={travel.right}>
				<Link href={`/post/${mockPosts[0].title}`}>
					<a>
						<TitlePreview
							cssWrap={travel.wrapTp}
							cssTitle={travel.title}
							cssPreview={travel.postPreview}
							title={mockPosts[0].title}
						/>
						<Thumbnail src={"url"} />
					</a>
				</Link>
			</div>
		</Grid>
	);
}
