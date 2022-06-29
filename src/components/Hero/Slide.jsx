import React, { forwardRef } from "react";
import ReadMore from "components/Reuse/ReadMore";
import one from "assets/images/one.jpg";
import Date from "components/Reuse/Date";

export default forwardRef(function Slide(props, ref) {
	const { css, id } = props;

	return (
		<div ref={ref} className={css.slide}>
			<img src={one} alt='' className={css.thumbNail} />
			<div className={css.contentInfo}>
				<Date css={css.date} date={"Mar 6, 2019"} head={true} />
				<h2 className={css.title}>
					{id} Every Level Of Your Life Will Demand A Different
					You!
				</h2>
				<ReadMore />
			</div>
		</div>
	);
});
