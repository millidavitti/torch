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
import { useQuery, gql } from "@apollo/client";
import { MoonLoader } from "react-spinners";
import Link from "next/link";

const GET_HEALTH = gql`
	query HealthPosts($var: PostFiltersInput, $sort: [String]) {
		posts(filters: $var, sort: $sort) {
			data {
				id
				attributes {
					title
					snippet
					publishedAt
					thumb {
						data {
							attributes {
								url
							}
						}
					}
					author {
						data {
							attributes {
								name
								avatar {
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
			}
		}
	}
`;

export default function Health() {
	const { data, loading, error } = useQuery(GET_HEALTH, {
		variables: {
			var: {
				categories: {
					IDN: {
						eq: "Health",
					},
				},
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

	const flexPosts = [];

	for (let i = 0; i < data.posts.data.length; i++) {
		const {
			id,
			attributes: { title, publishedAt },
		} = data.posts.data[i];
		if (i) {
			flexPosts.push(
				<div key={id}>
					<Link href={`/post/${id}`}>
						<a>
							<TitlePreview
								cssWrap={`${health.wrapTp} ${health.modWrapTp}`}
								cssTitle={health.title}
								title={title}
							/>
						</a>
					</Link>
					<PostDate
						css={health.date}
						date={new Date(publishedAt).toDateString()}
						head={false}
					/>
				</div>,
			);
		} else continue;
	}

	const {
		id,
		attributes: {
			title,
			snippet,
			thumb: {
				data: {
					attributes: { url },
				},
			},
			author: {
				data: {
					attributes: {
						name,
						avatar: {
							data: {
								attributes: { url: profilePic },
							},
						},
					},
				},
			},
		},
	} = data.posts.data[0];
	return (
		<>
			<Margin>
				<PostFlex>
					<Thumbnail src={url} />
					<PostInfo>
						<Author
							cssWrap={health.wrapAuth}
							cssAvatar={health.avatar}
							cssName={health.name}
							name={name}
							src={profilePic}
						/>
						<TitlePreview title={title} preview={snippet} />
						<ReadMore postID={id} />
					</PostInfo>
				</PostFlex>
			</Margin>
			<PostFlex>{flexPosts}</PostFlex>
		</>
	);
}
