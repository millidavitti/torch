import React from "react";
import footer from "../Footer/footer.module.css";

import {
	FacebookLogo,
	TwitterLogo,
	Globe,
	InstagramLogo,
} from "phosphor-react";
function Socials(props) {
	const { showFacebook, showTwitter, showWebsite } = props;
	return (
		<div className={footer.socialWrap}>
			{showFacebook && (
				<a href='https://www.instagram.com/milli_davitti/'>
					<InstagramLogo className={footer.facebook} size={30} />
				</a>
			)}

			{showTwitter && (
				<a href='https://twitter.com/GIGO_22'>
					<TwitterLogo className={footer.twitter} size={30} />
				</a>
			)}
			{showWebsite && <Globe className={footer.globe} size={30} />}
		</div>
	);
}

export default Socials;
