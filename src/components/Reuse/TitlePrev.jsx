import React from "react";

function TitlePrev(props) {
  const { children, cssWrap } = props;
  return <div className={cssWrap}>{children}</div>;
}

export default TitlePrev;
