import React, { useState } from "react";
import Author from "components/Reuse/Author";
import Date from "components/Reuse/Date";

import TitlePreview from "components/Reuse/TitlePreview";
export default function EditorTab(props) {
	const [show, setShow] = useState({ shown: false });
	const { css, author, category, title, preview, btns, src, thumb } = props;

	const sho = {
		transform: show.shown ? "translate(0)" : "translate(100px)",
	};

	const head = {
		opacity: show.shown ? 1 : 0,
	};

	return (
		<div className={css.tab}>
			<div
				className={css.thumbWrap}
				onClick={() =>
					setShow((pre) => ({ ...pre, shown: !pre.shown }))
				}
				onMouseOut={() =>
					setShow((pre) => ({ ...pre, shown: false }))
				}
			>
				<img src={thumb} alt={title} className={css.thumb} />
				<Author
					cssWrap={css.authorInfo}
					cssAvatar={css.avatar}
					cssName={css.name}
					name={author}
					src={src}
					sho={sho}
					head={head}
				/>
				<h2 className={css.category}>{category}</h2>
			</div>

			<div className={css.info}>
				<Date css={css.date} date={"Mar 6, 2019"} head={true} />
				<TitlePreview
					cssWrap={css.wrapTp}
					cssTitle={css.title}
					cssPreview={css.postPreview}
					title={title}
					preview={preview}
					href={"https://google.com"}
				/>
			</div>
			<div className={css.navigate}>
				<button className={css.readMore}>Read More</button>
				<div className={css.circularBtnWrap}>{btns}</div>
			</div>
		</div>
	);
}
