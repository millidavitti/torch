import React from "react";
import postPage from "components/Reuse/CSS/postPage.module.css";
import post from "components/Reuse/CSS/post.module.css";
import Author from "components/Reuse/Author";
import seven from "assets/images/seven.jpg";
import eight from "assets/images/eight.jpg";
import Container from "components/Reuse/Container";
import Margin from "components/Reuse/Margin";
import { FacebookLogo, TwitterLogo } from "phosphor-react";
import PostWrap from "components/Reuse/PostWrap";
import SectionHeader from "components/Reuse/SectionHeader";
import Grid from "components/Reuse/Grid";
import GridLeft from "components/Reuse/GridLeft";
import Sidebar from "components/Reuse/Sidebar";
import Sticky from "components/Reuse/Sticky";
import TopTrend from "components/Reuse/TopTrend";
import TrendingPost from "components/Reuse/TrendingPost";
import { useQuery, gql } from "@apollo/client";
import { Outlet, useParams } from "react-router-dom";
import { MoonLoader } from "react-spinners";
import RelatedPost from "components/Reuse/RelatedPost";

const GET_POST = gql`
	query ($postID: ID, $cat: CategoryFiltersInput) {
		post(id: $postID) {
			data {
				attributes {
					title
					content
					publishedAt
					thumb {
						data {
							attributes {
								url
							}
						}
					}
					categories(filters: $cat) {
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

export default function PostPage() {
	const { postID, path } = useParams();
	const { data, loading } = useQuery(GET_POST, {
		variables: {
			postID,
			cat: {
				IDN: {
					containsi: path,
				},
			},
		},
	});

	if (loading)
		return (
			<MoonLoader
				cssOverride={{ margin: "auto" }}
				color='var(--secondary)'
				size={25}
			/>
		);
	if (!data.post.data) return <p>Post not found!</p>;

	const {
		post: {
			data: {
				attributes: {
					title,
					content,
					publishedAt,
					thumb: {
						data: {
							attributes: { url },
						},
					},
					categories: {
						data: [
							{
								attributes: { IDN },
							},
						],
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
			},
		},
	} = data;

	window.scrollTo(0, 0);
	return (
		<>
			<Container>
				<Margin>
					<div className={postPage.wrap}>
						{/* Thumbnail */}
						<div className={postPage.thumbnail}>
							<img
								src={`https://torch-cms-database.herokuapp.com${url}`}
								alt=''
							/>
							<div className={postPage.overlay}>
								<p className={postPage.tag}>{IDN}</p>
								<h1>{title}</h1>
								<Author
									cssWrap={post.wrapAuth}
									cssAvatar={post.avatar}
									cssName={post.name}
									name={name}
									src={`https://torch-cms-database.herokuapp.com${profilePic}`}
								/>
							</div>
						</div>
						{/* Content */}
						<Grid>
							<GridLeft>
								<Margin>
									<div className={postPage.postContent}>
										<div className={postPage.leftBar}>
											<div className={postPage.stick}>
												<Author
													cssWrap={postPage.wrapAuth}
													cssAvatar={postPage.avatar}
													cssName={postPage.name}
													name={name}
													src={`https://torch-cms-database.herokuapp.com${profilePic}`}
												/>
												<div className={postPage.share}>
													<p>Share:</p>
													<div className={postPage.shareIcons}>
														<FacebookLogo
															size={25}
															color={"var(--secondary)"}
															cursor={"pointer"}
														/>
														<TwitterLogo
															size={25}
															color={"var(--secondary)"}
															cursor={"pointer"}
														/>
													</div>
												</div>
											</div>
										</div>
										<article className={postPage.contentWrap}>
											{
												<div
													dangerouslySetInnerHTML={{
														__html: content,
													}}
												/>
											}
										</article>
										{/* Content Footer */}
										<div className={postPage.contentFooter}>
											<p className={postPage.date}>
												{new Date(publishedAt).toDateString()}
											</p>
											<div className={postPage.footerTag}></div>
										</div>
									</div>
									<Margin>
										<div className={postPage.postAuthor}>
											<img src={eight} alt='' />
											<div className={postPage.postAuthinfo}>
												<h2>Donald Abua</h2>
												<p>
													Lorem ipsum dolor sit amet consectetur
													adipisicing elit. Non facilis aperiam,
													perferendis earum odit eligendi?
												</p>
											</div>
										</div>
									</Margin>
									<PostWrap>
										<SectionHeader text={"Related Posts"} />
										<RelatedPost category={IDN} />
									</PostWrap>
								</Margin>
							</GridLeft>
							<Sidebar>
								<Sticky>
									<TopTrend>
										<TrendingPost />
										<TrendingPost />
										<TrendingPost />
										<TrendingPost />
										<TrendingPost />
										<TrendingPost />
										<TrendingPost />
										<TrendingPost />
										<TrendingPost />
										<TrendingPost />
									</TopTrend>
								</Sticky>
							</Sidebar>
						</Grid>
					</div>
				</Margin>
			</Container>
			<Outlet />
		</>
	);
}
