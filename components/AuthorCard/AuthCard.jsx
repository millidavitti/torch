import React from "react";
import { TwitterLogo, Globe, InstagramLogo } from "phosphor-react";
import authCard from "../AuthorCard/authCard.module.css";

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
						<a href={parsedAuthor.socials.instagram}>
							<InstagramLogo className={authCard.facebook} size={30} />
						</a>
						<a href={parsedAuthor.socials.twitter}>
							<TwitterLogo className={authCard.twitter} size={30} />
						</a>
						<Globe className={authCard.globe} size={30} />
					</div>
				</div>
			</section>
		</section>
	);
}
