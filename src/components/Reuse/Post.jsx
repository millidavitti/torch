import React from "react";
// Components
import TitlePreview from "components/Reuse/TitlePreview";
import Thumbnail from "components/Reuse/Thumbnail";
import Date from "components/Reuse/Date";

// Others
import five from "assets/images/five.jpg";
import ReadMore from "./ReadMore";

export default function Post(props) {
	const { css } = props;
	return (
		<div className={css.category}>
			<Thumbnail
				src={five}
				css={css}
				href={"https://google.com"}
				alt={"me"}
			/>
			<Date date={"Mar 4, 2019"} head={false} />
			<h2 className={css.categoryHead}>Fashion</h2>
			<TitlePreview
				cssWrap={css.wrapTp}
				cssTitle={css.title}
				cssPreview={css.postPreview}
				title={"New Post"}
				preview={
					"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus dolor animi ex voluptatem totam ab aut amet reiciendis, in laborum?"
				}
				href='https://google.com'
			/>
			<ReadMore href={"https://google.com"} />
		</div>
	);
}
