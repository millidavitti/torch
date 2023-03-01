import React from "react";
import { FacebookLogo, TwitterLogo, Globe } from "phosphor-react";
import authCard from "../AuthorCard/authCard.module.css";
import { mockPosts } from "../../serverless/mock";

export default function AuthCard(props) {
	return (
		<section className={authCard.cardWrap}>
			<img
				src={mockPosts[0].author.avatar}
				alt={mockPosts[0].author.name}
				className={authCard.thumb}
			/>

			<section className={authCard.metaOverlay}>
				<h2 className={authCard.name}>{mockPosts[0].author.name}</h2>
				<p className={authCard.description}>{props.description}</p>
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
