import React from "react";
import { gql, useQuery } from "@apollo/client";
import { MoonLoader } from "react-spinners";
import TrendingPost from "./TrendingPost";
import TopTrend from "./TopTrend";
const GET_TRENDS = gql`
	query Trends($trendSort: [String], $pag: PaginationArg) {
		posts(sort: $trendSort, pagination: $pag) {
			data {
				id
				attributes {
					title
					publishedAt
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

export default function TrendsWrap() {
	const { data, loading, error } = useQuery(GET_TRENDS, {
		variables: {
			trendSort: ["publishedAt:asc"],
			pag: {
				start: 0,
				limit: 5,
			},
		},
	});
	if (error) return <p>Error : {error.message}</p>;
	if (loading)
		return (
			<TopTrend>
				<MoonLoader
					cssOverride={{ margin: " 20px auto" }}
					color='var(--secondary)'
					size={25}
				/>
			</TopTrend>
		);

	const renderTrends = data.posts.data.map(({ attributes, id }) => {
		const {
			title,
			publishedAt,
			thumb: {
				data: {
					attributes: { url },
				},
			},
		} = attributes;
		return (
			<TrendingPost
				key={id}
				id={id}
				title={title}
				publishedAt={publishedAt}
				url={url}
			/>
		);
	});
	return <TopTrend>{renderTrends}</TopTrend>;
}
