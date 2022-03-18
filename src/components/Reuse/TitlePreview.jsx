import React from "react";

function TitlePreview(props) {
  const { cssWrap, cssTitle, cssPreview, title, preview } = props;
  return (
    <div className={cssWrap}>
      <h2 className={cssTitle}>{title}</h2>
      <p className={cssPreview}>{preview}</p>
    </div>
  );
}

export default TitlePreview;
