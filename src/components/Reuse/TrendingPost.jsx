import React from "react";
import TitlePreview from "components/Reuse/TitlePreview";
import Date from "components/Reuse/Date";

import nine from "assets/images/nine.jpg";
function TrendingPost({ css }) {
	return (
		<div className={css.trendingPosts}>
			<img src={nine} alt='' className={css.thumb} />

			<div className={css.postAndDate}>
				<TitlePreview
					cssWrap={css.wrapTp}
					cssTitle={css.title}
					cssPreview={css.postPreview}
					title={"Pinketh effect on men"}
					href={"https://google.com"}
				/>
				<Date css={css.date} date={"March 4, 3029"} />
			</div>
		</div>
	);
}

export default TrendingPost;
