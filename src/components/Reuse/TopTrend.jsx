import React from "react";
import trend from "components/Reuse/CSS/trend.module.css";
function TopTrend({ children }) {
	return (
		<section className={trend.topTrending}>
			<h2>Top Trending</h2>
			{children}
		</section>
	);
}

export default TopTrend;
