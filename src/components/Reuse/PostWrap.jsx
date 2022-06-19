import React from "react";

// Css
import post from "components/Reuse/CSS/post.module.css";

export default function PostWrap({ children }) {
	return <section className={post.post}>{children}</section>;
}
