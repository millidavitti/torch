import React from "react";

function Author(props) {
  const { cssWrap, cssAvatar, cssName, name, src, sho, head } = props;
  return (
    <div className={cssWrap} style={sho}>
      <img src={src} alt={name} className={cssAvatar} />
      <h3 className={cssName} style={head}>
        {name}
      </h3>
    </div>
  );
}

export default Author;
