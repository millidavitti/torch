import React from "react";
import Grid from "./Reuse/Grid";
import Margin from "./Reuse/Margin";
import ReadMore from "./Reuse/ReadMore";
import Thumbnail from "./Reuse/Thumbnail";
import TitlePreview from "./Reuse/TitlePreview";
import travel from "./Reuse/CSS/travel.module.css";
import { useQuery, gql } from "@apollo/client";
import { MoonLoader } from "react-spinners";
import Link from "next/Link";

const GET_TRAVEL = gql`
	query ($var: PostFiltersInput, $size: PaginationArg, $sort: [String]) {
		posts(filters: $var, pagination: $size, sort: $sort) {
			data {
				id
				attributes {
					title
					snippet
					thumb {
						data {
							attributes {
								url
							}
						}
					}
				}
			}
		}
	}
`;

export default function Travel() {
	const { data, loading, error } = useQuery(GET_TRAVEL, {
		variables: {
			var: {
				categories: {
					IDN: {
						containsi: "travel",
					},
				},
			},
			size: {
				pageSize: 3,
			},
			sort: ["publishedAt:desc"],
		},
	});
	if (error) return <p>Error: {error.message}</p>;

	if (loading)
		return (
			<MoonLoader
				cssOverride={{ margin: "0 auto" }}
				color='var(--secondary)'
				size={25}
			/>
		);

	const {
		posts: {
			data: [
				{
					id: midID,
					attributes: {
						title: midtitle,
						snippet: midSnipp,
						thumb: {
							data: {
								attributes: { url: midThumb },
							},
						},
					},
				},
				{
					id: leftID,
					attributes: {
						title: leftTitle,
						thumb: {
							data: {
								attributes: { url: leftThumb },
							},
						},
					},
				},
				{
					id: rightID,
					attributes: {
						title: rightTitle,
						thumb: {
							data: {
								attributes: { url: rightThumb },
							},
						},
					},
				},
			],
		},
	} = data;

	return (
		<Grid>
			<div className={travel.mid}>
				<Margin>
					<TitlePreview title={midtitle} preview={midSnipp} />
					<ReadMore postID={midID} />
					<Margin>
						<Thumbnail src={midThumb} />
					</Margin>
				</Margin>
			</div>
			{/* For Widths < 1024px */}
			<div className={travel.flexRow}>
				<Link href={`/post/${leftID}`}>
					<a>
						<Thumbnail src={leftThumb} />
						<TitlePreview
							cssWrap={travel.wrapTp}
							cssTitle={travel.title}
							cssPreview={travel.postPreview}
							title={leftTitle}
						/>
					</a>
				</Link>
				<Link href={`/post/${rightID}`}>
					<a>
						<Thumbnail src={rightThumb} />
						<TitlePreview
							cssWrap={travel.wrapTp}
							cssTitle={travel.title}
							cssPreview={travel.postPreview}
							title={rightTitle}
						/>
					</a>
				</Link>
			</div>
			{/* For Widths >= than 1024px */}
			<div className={travel.left}>
				<Link href={`/post/${leftID}`}>
					<a>
						<Thumbnail src={leftThumb} />
						<TitlePreview
							cssWrap={travel.wrapTp}
							cssTitle={travel.title}
							cssPreview={travel.postPreview}
							title={leftTitle}
						/>
					</a>
				</Link>
			</div>
			<div className={travel.right}>
				<Link href={`/post/${rightID}`}>
					<a>
						<TitlePreview
							cssWrap={travel.wrapTp}
							cssTitle={travel.title}
							cssPreview={travel.postPreview}
							title={rightTitle}
						/>
						<Thumbnail src={rightThumb} />
					</a>
				</Link>
			</div>
		</Grid>
	);
}
