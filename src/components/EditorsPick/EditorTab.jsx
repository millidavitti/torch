import React, { useState } from "react";
import Author from "components/Reuse/Author";
import PostDate from "components/Reuse/Date";
import editors from "components/EditorsPick/editors.module.css";
import { Link } from "react-router-dom";

export default function EditorTab(props) {
	const [show, setShow] = useState({ shown: false });
	const {
		btns,
		pick: {
			id,
			attributes: {
				title,
				snippet,
				publishedAt,
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
				author: {
					data: {
						attributes: {
							name,
							avatar: {
								data: {
									attributes: { url: profilePic },
								},
							},
						},
					},
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
					src={`https://torch-cms-database.herokuapp.com${url}`}
					alt={title}
					className={editors.thumb}
				/>
				<Author
					cssWrap={editors.authorInfo}
					cssAvatar={editors.avatar}
					cssName={editors.name}
					name={name}
					src={`https://torch-cms-database.herokuapp.com${profilePic}`}
					sho={sho}
					head={head}
				/>
				<h2 className={editors.category}>{IDN}</h2>
			</div>

			<div className={editors.info}>
				<PostDate
					css={editors.date}
					date={new Date(publishedAt).toDateString()}
					head={true}
				/>
				<div className={editors.wrapTp}>
					<Link to={`post/${id}`}>
						<h2 className={editors.title}>{title}</h2>
					</Link>
					<p className={editors.postPreview}>{snippet}</p>
				</div>
			</div>

			<div className={editors.navigate}>
				<Link to={`post/${id}`} className={editors.readMore}>
					<button>Read More</button>
				</Link>
				<div className={editors.circularBtnWrap}>{btns}</div>
			</div>
		</div>
	);
}
