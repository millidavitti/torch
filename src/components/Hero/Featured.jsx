import React from "react";
import Author from "components/Reuse/Author";
import { useQuery, gql } from "@apollo/client";
import hero from "components/Hero/hero.module.css";
import { Link } from "react-router-dom";
import { MoonLoader } from "react-spinners";
const GET_FEATURED = gql`
	query ($var: PostFiltersInput) {
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
	const { data, loading } = useQuery(GET_FEATURED, {
		variables: {
			var: {
				featured: {
					eq: true,
				},
			},
		},
	});
	if (loading)
		return (
			<div className={hero.post}>
				<MoonLoader
					cssOverride={{ margin: "0 auto" }}
					color='var(--secondary)'
					size={25}
				/>
			</div>
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
		<Link to={`post/${id}`} className={hero.post}>
			<h2 className={hero.postHead}>{title}</h2>
			<img src={url} alt='' className={hero.postThumb} />
			<Author
				cssWrap={hero.authorInfo}
				cssAvatar={hero.avatar}
				cssName={hero.name}
				src={profilePic}
				name={name}
			/>
		</Link>
	);
}
