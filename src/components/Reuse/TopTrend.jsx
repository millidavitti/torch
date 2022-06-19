import React from "react";
import category from "components/Reuse/CSS/category.module.css";
function TopTrend({ children }) {
	return (
		<section className={category.topTrending}>
			<h2>Top Trending</h2>
			{children}
		</section>
	);
}

export default TopTrend;
