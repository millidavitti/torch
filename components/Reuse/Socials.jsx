import React from "react";

import {
	FacebookLogo,
	TwitterLogo,
	Globe,
	InstagramLogo,
} from "phosphor-react";
function Socials(props) {
	const { css, showFacebook, showTwitter, showWebsite } = props;
	return (
		<div className={css.socialWrap}>
			{showFacebook && (
				<a href='https://www.instagram.com/milli_davitti/'>
					<InstagramLogo className={css.facebook} size={30} />
				</a>
			)}

			{showTwitter && (
				<a href='https://twitter.com/GIGO_22'>
					<TwitterLogo className={css.twitter} size={30} />
				</a>
			)}
			{showWebsite && <Globe className={css.globe} size={30} />}
		</div>
	);
}

export default Socials;
