import React, { useState } from "react";
import Author from "components/Reuse/Author";
import Date from "components/Reuse/Date";
import editors from "components/EditorsPick/editors.module.css";
import { Link } from "react-router-dom";

export default function EditorTab(props) {
	const [show, setShow] = useState({ shown: false });
	const {
		btns,
		pick: {
			isActive,
			attributes: {
				title,
				snippet,
				thumb: {
					data: {
						attributes: { url },
					},
				},
				categories: {
					data: [
						{
							attributes: { IDN },
						},
					],
				},
			},
		},
	} = props;

	const sho = {
		transform: show.shown ? "translate(0)" : "translate(100px)",
	};

	const head = {
		opacity: show.shown ? 1 : 0,
	};

	return (
		<div className={editors.tab}>
			<div
				className={editors.thumbWrap}
				onClick={() => setShow((pre) => ({ ...pre, shown: !pre.shown }))}
				onMouseOut={() => setShow((pre) => ({ ...pre, shown: false }))}
			>
				<img
					src={`http://localhost:1337${url}`}
					alt={title}
					className={editors.thumb}
				/>
				<Author
					cssWrap={editors.authorInfo}
					cssAvatar={editors.avatar}
					cssName={editors.name}
					name={"Vegan Bake"}
					src={`http://localhost:1337${url}`}
					sho={sho}
					head={head}
				/>
				<h2 className={editors.category}>{IDN}</h2>
			</div>

			<div className={editors.info}>
				<Date css={editors.date} date={"Mar 6, 2019"} head={true} />
				<div className={editors.wrapTp}>
					<Link to={`post/${3}`}>
						<h2 className={editors.title}>{title}</h2>
					</Link>
					<p className={editors.postPreview}>{snippet}</p>
				</div>
			</div>

			<div className={editors.navigate}>
				<Link to={`post/${3}`} className={editors.readMore}>
					<button>Read More</button>
				</Link>
				<div className={editors.circularBtnWrap}>{btns}</div>
			</div>
		</div>
	);
}
