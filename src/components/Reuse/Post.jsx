import React from "react";
import post from "components/Reuse/CSS/post.module.css";

export default function Post({ children }) {
	return <div className={post.singlePost}>{children}</div>;
}
