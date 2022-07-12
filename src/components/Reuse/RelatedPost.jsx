import React from "react";
import PostDate from "./Date";
import Post from "./Post";
import PostFlex from "./PostFlex";
import PostInfo from "./PostInfo";
import ReadMore from "./ReadMore";
import Thumbnail from "./Thumbnail";
import TitlePreview from "./TitlePreview";
import { gql, useQuery } from "@apollo/client";
import { MoonLoader } from "react-spinners";
import post from "components/Reuse/CSS/post.module.css";
import { useParams } from "react-router-dom";

const GET_RELATED_POST = gql`
	query ($var: PostFiltersInput, $cat: CategoryFiltersInput, $sort: [String]) {
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
export default function RelatedPost({ category }) {
	const { postID } = useParams();
	const { data, loading } = useQuery(GET_RELATED_POST, {
		variables: {
			sort: ["publishedAt:desc"],
			var: {
				categories: {
					IDN: {
						containsi: category,
					},
				},
			},
			cat: {
				IDN: {
					containsi: category,
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
		if (id !== postID)
			flexPosts.push(
				<Post key={id}>
					<Thumbnail src={url} />
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
	}
	return <PostFlex>{flexPosts}</PostFlex>;
}
