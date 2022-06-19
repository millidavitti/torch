import React from "react";
import post from "components/Reuse/CSS/post.module.css";

export default function PostInfo({ children }) {
	return <div className={post.info}>{children}</div>;
}
