import React from "react";
import footer from "../Footer/footer.module.css";
import useSWR from "swr";
import { TwitterLogo, Globe, InstagramLogo } from "phosphor-react";

function Socials(props) {
	const { showInstagram, showTwitter, showWebsite } = props;
	const { data: author, isLoading } = useSWR("/api/author");
	if (isLoading) return;
	return (
		<div className={footer.socialWrap}>
			{showInstagram && (
				<a href={author.socials.instagram}>
					<InstagramLogo className={footer.facebook} size={30} />
				</a>
			)}

			{showTwitter && (
				<a href={author.socials.twitter}>
					<TwitterLogo className={footer.twitter} size={30} />
				</a>
			)}
			{showWebsite && <Globe className={footer.globe} size={30} />}
		</div>
	);
}

export default Socials;
