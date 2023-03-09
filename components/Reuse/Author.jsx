import React, { forwardRef } from "react";
import post from "../Reuse/CSS/post.module.css";
export default forwardRef(function Author(props, ref) {
	const { name, src, show } = props;
	return (
		<div className={post.wrapAuth} style={show} ref={ref}>
			<img src={src} alt={name} className={post.avatar} />
			<h3 className={post.name} style={show}>
				{name}
			</h3>
		</div>
	);
});
