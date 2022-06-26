import React from "react";
import post from "components/Reuse/CSS/post.module.css";
function Thumbnail(props) {
	const { src, href, alt } = props;
	return (
		<div style={{ position: "relative" }}>
			<a href={href} style={{ position: "absolute", inset: 0 }}>
				{" "}
			</a>
			<img src={src} alt={alt} className={post.singlePostThumb} />
		</div>
	);
}

export default Thumbnail;
