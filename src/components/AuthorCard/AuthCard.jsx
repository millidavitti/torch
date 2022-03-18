import React from "react";
import authCard from "components/AuthorCard/authCard.module.css";

function AuthCard(props) {
  const { src, name, description } = props;
  return (
    <div>
      <img src={src} alt={name} />
      <section className={authCard.metaOverlay}>
        <h2>{name}</h2>
        <p>{description}</p>
        <div className={authCard.socials}></div>
      </section>
    </div>
  );
}

export default AuthCard;
