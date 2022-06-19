import React from "react";
import post from "components/Reuse/CSS/post.module.css";

export default function PostFlex({ children }) {
	return <div className={post.flex}>{children}</div>;
}
