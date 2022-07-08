import React from "react";
import post from "components/Reuse/CSS/post.module.css";
export default function Thumbnail(props) {
	const { src, alt } = props;
	return (
		<div style={{ position: "relative" }}>
			<img src={src} alt={alt} className={post.singlePostThumb} />
		</div>
	);
}
