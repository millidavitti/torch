import React from "react";
import post from "./CSS/post.module.css";

export default function Post({ children }) {
	return <div className={post.singlePost}>{children}</div>;
}
