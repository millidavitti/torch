import React from "react";

import Date from "../Reuse/Date";
import trend from "./CSS/trend.module.css";

export default function TrendingPost() {
	return (
		<div className={trend.trendingPosts}>
			<img src={"nine"} alt='' className={trend.thumb} />
			<div className={trend.postAndDate}>
				<p>Pinketh Effect On Men</p>
				<Date css={trend.date} date={"March 4, 3029"} />
			</div>
		</div>
	);
}
