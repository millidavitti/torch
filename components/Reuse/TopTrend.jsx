import React from "react";
import trend from "./CSS/trend.module.css";
export default function TopTrend({ children }) {
	return (
		<section className={trend.topTrending}>
			<h2>Top Trending</h2>
			<div className={trend.scroll}>{children}</div>
		</section>
	);
}
