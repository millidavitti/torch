import React from "react";
import css from "components/Reuse/readmore.module.css";

function ReadMore(props) {
  const { href } = props;
  return (
    <button className={css.readMore}>
      <a href={href}> </a>
      Read More
    </button>
  );
}

export default ReadMore;
