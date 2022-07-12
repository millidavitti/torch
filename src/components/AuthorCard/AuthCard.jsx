import React from "react";
import { FacebookLogo, TwitterLogo, Globe } from "phosphor-react";
import authCard from "components/AuthorCard/authCard.module.css";
import four from "assets/images/four.jpg";
import { gql, useQuery } from "@apollo/client";
import { MoonLoader } from "react-spinners";
const GET_OWNER = gql`
	query ($authID: ID) {
		author(id: $authID) {
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
`;
export default function AuthCard(props) {
	const { description } = props;
	const { data, loading } = useQuery(GET_OWNER, {
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
