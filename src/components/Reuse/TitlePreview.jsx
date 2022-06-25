import React from "react";
import post from "components/Reuse/CSS/post.module.css";

export default function TitlePreview(props) {
	const { title, preview, href } = props;
	return (
		<div className={post.wrapTp}>
			<h2 className={post.title}>
				<a href={href}> </a>
				{title}
			</h2>
			<p className={post.postPreview}>{preview}</p>
		</div>
	);
}
