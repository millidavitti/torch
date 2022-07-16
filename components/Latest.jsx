import React from "react";
import Author from "./Reuse/Author";
import PostDate from "./Reuse/Date";
import Post from "./Reuse/Post";
import PostFlex from "./Reuse/PostFlex";
import PostInfo from "./Reuse/PostInfo";
import ReadMore from "./Reuse/ReadMore";
import TitlePreview from "./Reuse/TitlePreview";
import post from "./Reuse/CSS/post.module.css";
import { gql, useQuery } from "@apollo/client";
import { MoonLoader } from "react-spinners";
import Thumbnail from "./Reuse/Thumbnail";

const GET_LATEST = gql`
	query ($sort: [String]) {
		posts(sort: $sort) {
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
					categories {
						data {
							attributes {
								IDN
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
export default function Latest() {
	const { data, loading,error } = useQuery(GET_LATEST, {
		variables: {
			sort: ["publishedAt:desc"],
		},
   });
	if (error) return <p>Error: {error.message}</p>;
   
	if (loading)
		return (
			<MoonLoader
				cssOverride={{ margin: "auto" }}
				color='var(--secondary)'
				size={25}
			/>
		);
	const flexPosts = [];

	for (let i = 0; i < data.posts.data.length; i++) {
		const {
			id,
			attributes: {
				title,
				publishedAt,
				snippet,
				thumb: {
					data: {
						attributes: { url },
					},
				},
				categories,
			},
		} = data.posts.data[i];
		if (i) {
			flexPosts.push(
				<Post key={id}>
					<Thumbnail src={url} alt={"me"} />
					<PostInfo>
						<PostDate
							date={new Date(publishedAt).toDateString()}
							head={false}
						/>
						<div style={{ display: "flex", gap: "7px" }}>
							{categories.data.map(({ attributes: { IDN } }) => (
								<h2 key={IDN} className={post.singlePostHead}>
									{IDN}
								</h2>
							))}
						</div>
						<TitlePreview title={title} preview={snippet} />
						<ReadMore postID={id} />
					</PostInfo>
				</Post>,
			);
		} else continue;
	}

	const {
		id,
		attributes: {
			title,
			snippet,
			publishedAt,
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
			<PostFlex>
				<div className={post.thumbWrap}>
					<img src={url} alt='' className={post.thumb} />

					<Author
						cssWrap={post.wrapAuth}
						cssAvatar={post.avatar}
						cssName={post.name}
						name={name}
						src={profilePic}
					/>
				</div>
				<PostInfo>
					<PostDate
						css={post.date}
						date={new Date(publishedAt).toDateString()}
						head={true}
					/>
					<TitlePreview title={title} preview={snippet} />
					<ReadMore postID={id} />
				</PostInfo>
			</PostFlex>

			{/* Others */}
			<PostFlex>{flexPosts}</PostFlex>
		</>
	);
}
