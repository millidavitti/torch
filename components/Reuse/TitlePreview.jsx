import React from "react";
import post from "./CSS/post.module.css";

export default function TitlePreview(props) {
	const { title, preview } = props;
	return (
		<div className={post.wrapTp}>
			<h2 className={post.title}>{title}</h2>
			<p className={post.postPreview}>{preview}</p>
		</div>
	);
}
