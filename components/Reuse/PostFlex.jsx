import React from "react";
import post from "./CSS/post.module.css";

export default function PostFlex({ children }) {
	return <div className={post.flex}>{children}</div>;
}
