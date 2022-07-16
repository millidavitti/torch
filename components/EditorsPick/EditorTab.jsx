import React, { useRef, useState } from "react";
import Author from "../Reuse/Author";
import PostDate from "../Reuse/Date";
import editors from "../EditorsPick/editors.module.css";
import Link from "next/Link";

export default function EditorTab(props) {
	const wrap = useRef();
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
		transform: show.shown
			? "translate(0)"
			: `translate(${
					wrap.current
						? parseFloat(getComputedStyle(wrap.current).width) - 45
						: 400
			  }px)`,
	};

	return (
		<div className={editors.tab}>
			<div
				className={editors.thumbWrap}
				onClick={() => setShow((pre) => ({ ...pre, shown: !pre.shown }))}
				onMouseOut={() => setShow((pre) => ({ ...pre, shown: false }))}
			>
				<img src={url} alt={title} className={editors.thumb} />
				<Author
					ref={wrap}
					cssWrap={editors.authorInfo}
					cssAvatar={editors.avatar}
					cssName={editors.name}
					name={name}
					src={profilePic}
					show={sho}
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
					<Link href={`/post/${id}`}>
						<h2 className={editors.title}>{title}</h2>
					</Link>
					<p className={editors.postPreview}>{snippet}</p>
				</div>
			</div>

			<div className={editors.navigate}>
				<Link href={`/post/${id}`}>
					<a className={editors.readMore}>Read More</a>
				</Link>
				<div className={editors.circularBtnWrap}>{btns}</div>
			</div>
		</div>
	);
}
