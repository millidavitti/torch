import React from "react";
import post from "./CSS/post.module.css";

export default function PostInfo({ children }) {
	return <div className={post.info}>{children}</div>;
}
