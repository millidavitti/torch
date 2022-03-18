import React from "react";

function Date(props) {
  const { css, date, head } = props;
  return (
    <div className={css}>
      {head && <h3>Date</h3>}
      <h4>{date}</h4>
    </div>
  );
}

export default Date;
