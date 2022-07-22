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
import PostWrap from "./Reuse/PostWrap";
import readmore from "./Reuse/CSS/readmore.module.css";

const GET_LATEST = gql`
	query LatestPost($latestSort: [String], $pag: PaginationArg) {
		posts(sort: $latestSort, pagination: $pag) {
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

const GET_SUBLATEST = gql`
	query LatestPost($latestSort: [String], $pag: PaginationArg) {
		posts(sort: $latestSort, pagination: $pag) {
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
			meta {
				pagination {
					page
					pageCount
				}
			}
		}
	}
`;
export default function Latest() {
	const {
		data: latest,
		loading,
		error,
	} = useQuery(GET_LATEST, {
		variables: {
			latestSort: ["publishedAt:desc"],
			pag: {
				start: 0,
				limit: 1,
			},
		},
	});
	const {
		data: subLatest,
		loading: subLoad,
		error: subError,
		fetchMore,
	} = useQuery(GET_SUBLATEST, {
		variables: {
			subLatestSort: ["publishedAt:desc"],
			pag: {
				start: 1,
				limit: 2,
			},
			notifyOnNetworkStatusChange: true,
		},
	});

	if (error || subError) return <p>Error: {error.message}</p>;

	if (loading || subLoad)
		return (
			<MoonLoader
				cssOverride={{ margin: "auto" }}
				color='var(--secondary)'
				size={25}
			/>
		);
	const flexPosts = subLatest.posts.data.map((data, id) => {
		const {
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
		} = data;
		return (
			<Post key={id}>
				<Thumbnail src={url} alt={"me"} />
				<PostInfo>
					<PostDate date={new Date(publishedAt).toDateString()} head={false} />
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
			</Post>
		);
	});

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
	} = latest.posts.data[0];
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
			<PostWrap>
				<PostFlex>{flexPosts}</PostFlex>
				{subLatest.posts.meta.pagination.page ===
					subLatest.posts.meta.pagination.pageCount || (
					<button
						onClick={() => {
							fetchMore({
								variables: {
									pag: {
										start: subLatest.posts.data.length + 1,
										limit: 2,
									},
								},
							});
						}}
						className={readmore.readMore}
						style={{ left: "43%", width: "auto" }}
					>
						{subLoad ? (
							<MoonLoader
								cssOverride={{ margin: "auto", left: "40%" }}
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
