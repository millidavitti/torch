import React from "react";
import TitlePreview from "components/Reuse/TitlePreview";
import Date from "components/Reuse/Date";
import trend from "components/Reuse/CSS/trend.module.css";

import nine from "assets/images/nine.jpg";
export default function TrendingPost() {
	return (
		<div className={trend.trendingPosts}>
			<img src={nine} alt='' className={trend.thumb} />
			<div className={trend.postAndDate}>
				<p>Pinketh Effect On Men</p>
				<Date css={trend.date} date={"March 4, 3029"} />
			</div>
		</div>
	);
}
