import React from "react";

import { FacebookLogo, TwitterLogo, Globe } from "phosphor-react";
function Socials(props) {
  const { css, showFacebook, showTwitter, showWebsite } = props;
  return (
    <div className={css.socialWrap}>
      {showFacebook && <FacebookLogo className={css.facebook} size={30} />}
      {showTwitter && <TwitterLogo className={css.twitter} size={30} />}
      {showWebsite && <Globe className={css.globe} size={30} />}
    </div>
  );
}

export default Socials;
