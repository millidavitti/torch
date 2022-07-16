import React from "react";
import editors from "../EditorsPick/editors.module.css";

export default function CircularBtn(props) {
	const { Fn, id, isActive } = props;
	const highlight = {
		background: isActive ? "var(--main)" : "rgba(255, 255, 255, 0.164)",
	};
	return (
		<button
			className={editors.circularBtn}
			style={highlight}
			onClick={Fn.bind(null, id)}
		></button>
	);
}
