import React from "react";
import { FacebookLogo, TwitterLogo, Globe } from "phosphor-react";
import authCard from "../AuthorCard/authCard.module.css";
import { mockPosts } from "../../serverless/mock";

export default function AuthCard({ author }) {
	const parsedAuthor = JSON.parse(author);
	return (
		<section className={authCard.cardWrap}>
			<img
				src={parsedAuthor.avatar}
				alt={parsedAuthor.name}
				className={authCard.thumb}
			/>

			<section className={authCard.metaOverlay}>
				<h2 className={authCard.name}>{parsedAuthor.name}</h2>
				<p className={authCard.description}>{parsedAuthor.bio}</p>
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
