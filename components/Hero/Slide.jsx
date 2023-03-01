import React, { forwardRef } from "react";
import ReadMore from "../Reuse/ReadMore";
import PostDate from "../Reuse/Date";
import hero from "./hero.module.css";

export default forwardRef(function Slide(props, ref) {
	return (
		<div ref={ref} className={hero.slide}>
			<img src={props.slide.thumb} alt='' className={hero.thumbNail} />
			<div className={hero.contentInfo}>
				<PostDate
					css={hero.date}
					date={new Date(props.slide.published).toDateString()}
					head={true}
				/>
				<h2 className={hero.title}>{props.slide.title}</h2>
				<ReadMore postID={props.slide.title} />
			</div>
		</div>
	);
});
