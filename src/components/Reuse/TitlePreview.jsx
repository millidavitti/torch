import React from "react";

function TitlePreview(props) {
  const { cssWrap, cssTitle, cssPreview, title, preview, href } = props;
  return (
    <div className={cssWrap}>
      <h2 className={cssTitle}>
        <a href={href}> </a>
        {title}
      </h2>
      <p className={cssPreview}>{preview}</p>
    </div>
  );
}

export default TitlePreview;