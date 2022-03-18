import React from "react";

function Author(props) {
  const { cssWrap, cssAvatar, cssName, name, src } = props;
  return (
    <div className={cssWrap}>
      <img src={src} alt={name} className={cssAvatar} />
      <h3 className={cssName}>{name}</h3>
    </div>
  );
}

export default Author;
