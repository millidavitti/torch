import React from "react";
import post from "./CSS/post.module.css";

export default function PostWrap({ children }) {
	return <section className={post.postWrap}>{children}</section>;
}
