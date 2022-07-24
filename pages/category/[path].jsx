// Css
import post from "../../components/Reuse/CSS/post.module.css";
import PostDate from "../../components/Reuse/Date";
// Component
import Post from "../../components/Reuse/Post";
import PostFlex from "../../components/Reuse/PostFlex";
import PostInfo from "../../components/Reuse/PostInfo";
import PostWrap from "../../components/Reuse/PostWrap";
import ReadMore from "../../components/Reuse/ReadMore";
import TitlePreview from "../../components/Reuse/TitlePreview";
import TopTrend from "../../components/Reuse/TopTrend";
import TrendingPost from "../../components/Reuse/TrendingPost";
import Thumbnail from "../../components/Reuse/Thumbnail";
import React from "react";
import Grid from "../../components/Reuse/Grid";
import GridLeft from "../../components/Reuse/GridLeft";
import Sidebar from "../../components/Reuse/Sidebar";
import Sticky from "../../components/Reuse/Sticky";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MoonLoader } from "react-spinners";
import AuthCard from "../../components/AuthorCard/AuthCard";
import Author from "../../components/Reuse/Author";
import Container from "../../components/Reuse/Container";
import Head from "next/head";
import TrendsWrap from "../../components/Reuse/TrendsWrap";

const GET_CATEGORY = gql`
	query ($var: PostFiltersInput, $cat: CategoryFiltersInput) {
		posts(filters: $var) {
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
					categories(filters: $cat) {
						data {
							attributes {
								IDN
							}
						}
					}
				}
			}
		}
	}
`;
export default function Category() {
	const { path } = useRouter().query;
	const { data, loading, error } = useQuery(GET_CATEGORY, {
		variables: {
			var: {
				categories: {
					IDN: {
						containsi: path,
					},
				},
			},
			cat: {
				IDN: {
					containsi: path,
				},
			},
		},
	});
	if (error) return <p>Error:{error.message}</p>;

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

				categories: {
					data: [
						{
							attributes: { IDN },
						},
					],
				},
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
						<h2 className={post.singlePostHead}>{IDN}</h2>
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
		},
	} = data.posts.data[0];
	return (
		<Container>
			<Head>
				<meta name='description' content='Torch Blog Categories' />
				<meta
					property='og:image'
					content='https://res.cloudinary.com/torch-cms-media/image/upload/v1658568341/logo_5d3d7f7c34_a598a29434.svg'
				/>
				<title>Categories : {IDN}</title>
			</Head>
			<PostWrap>
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
			</PostWrap>
			<Grid>
				<GridLeft>
					<PostWrap>
						<PostFlex>{flexPosts}</PostFlex>
					</PostWrap>
					<AuthCard
						name={"Donald Abua"}
						description={
							"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quas veniam quia aspernatur culpa quibusdam!"
						}
					/>
				</GridLeft>

				<Sidebar>
					<Sticky>
						<TrendsWrap />
					</Sticky>
				</Sidebar>
			</Grid>
		</Container>
	);
}
