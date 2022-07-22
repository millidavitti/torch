import React from "react";
import { FacebookLogo, TwitterLogo, Globe } from "phosphor-react";
import authCard from "../AuthorCard/authCard.module.css";
import { gql, useQuery } from "@apollo/client";
import { MoonLoader } from "react-spinners";
const GET_AUTHOR = gql`
	query Author($authID: ID) {
		author(id: $authID) {
			data {
				id
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
`;
export default function AuthCard(props) {
	const { description } = props;
	const { data, loading, error } = useQuery(GET_AUTHOR, {
		variables: {
			authID: 1,
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

	if (error) return <p>Error : {error.message}</p>;
	const {
		author: {
			data: {
				attributes: {
					name,
					avatar: {
						data: {
							attributes: { url },
						},
					},
				},
			},
		},
	} = data;
	return (
		<section className={authCard.cardWrap}>
			<img src={url} alt={name} className={authCard.thumb} />

			<section className={authCard.metaOverlay}>
				<h2 className={authCard.name}>{name}</h2>
				<p className={authCard.description}>{description}</p>
				<div className={authCard.socials}>
					<div className={authCard.socialWrap}>
						<FacebookLogo className={authCard.facebook} size={30} />
						<TwitterLogo className={authCard.twitter} size={30} />
						<Globe className={authCard.globe} size={30} />
					</div>
				</div>
			</section>
		</section>
	);
}
