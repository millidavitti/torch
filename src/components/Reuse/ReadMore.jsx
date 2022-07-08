import React from "react";
import readmore from "components/Reuse/CSS/readmore.module.css";
import { Link } from "react-router-dom";

export default function ReadMore({ postID }) {
	return (
		<Link className={readmore.readMore} to={`post/${postID}`}>
			Read More
		</Link>
	);
}
