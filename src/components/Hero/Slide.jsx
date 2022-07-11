import React, { forwardRef } from "react";
import ReadMore from "components/Reuse/ReadMore";
import PostDate from "components/Reuse/Date";
import hero from "components/Hero/hero.module.css";

export default forwardRef(function Slide(props, ref) {
	const {
		id,
		attributes: {
			title,
			publishedAt: date,
			thumb: {
				data: {
					attributes: { url },
				},
			},
		},
	} = props;

	return (
		<div ref={ref} className={hero.slide}>
			<img
				src={`https://torch-cms-database.herokuapp.com${url}`}
				alt=''
				className={hero.thumbNail}
			/>
			<div className={hero.contentInfo}>
				<PostDate
					css={hero.date}
					date={new Date(date).toDateString()}
					head={true}
				/>
				<h2 className={hero.title}>{title}</h2>
				<ReadMore postID={id} />
			</div>
		</div>
	);
});
