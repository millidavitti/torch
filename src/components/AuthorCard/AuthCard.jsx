import React from "react";
import { FacebookLogo, TwitterLogo, Globe } from "phosphor-react";
import authCard from "components/AuthorCard/authCard.module.css";
import four from "assets/images/four.jpg";

function AuthCard(props) {
  const { name, description } = props;
  return (
    <section className={authCard.cardWrap}>
      <img src={four} alt={name} className={authCard.thumb} />
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

export default AuthCard;
