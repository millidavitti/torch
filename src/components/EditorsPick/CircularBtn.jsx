import React from "react";
import editors from "components/EditorsPick/editors.module.css";

function CircularBtn(props) {
  const { Fn, id } = props;
  return (
    <button
      className={editors.circularBtn}
      onClick={Fn.bind(null, id)}
    ></button>
  );
}

export default CircularBtn;
