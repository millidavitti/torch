import React from "react";
import Author from "../Reuse/Author";
import { useQuery, gql } from "@apollo/client";
import hero from "./hero.module.css";
import { MoonLoader } from "react-spinners";
import Link from "next/link";

const GET_FEATURED = gql`
	query FeaturedPost($var: PostFiltersInput) {
		posts(filters: $var) {
			data {
				id
				attributes {
					title
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
export default function Featured() {
	const { data, loading, error } = useQuery(GET_FEATURED, {
		variables: {
			var: {
				featured: {
					eq: true,
				},
			},
		},
	});
	if (error) return <p>Error: {error.message}</p>;

	if (loading)
		return (
			<h1 className={hero.post}>
				<MoonLoader
					cssOverride={{ margin: "0 auto" }}
					color='var(--secondary)'
					size={25}
				/>
			</h1>
		);

	const {
		posts: {
			data: [
				{
					id,
					attributes: {
						title,
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
				},
			],
		},
	} = data;

	return (
		<Link href={`/post/${id}`}>
			<a className={hero.post}>
				<h2 className={hero.postHead}>{title}</h2>
				<img src={url} alt='' className={hero.postThumb} />
				<Author
					cssWrap={hero.authorInfo}
					cssAvatar={hero.avatar}
					cssName={hero.name}
					src={profilePic}
					name={name}
				/>
			</a>
		</Link>
	);
}
