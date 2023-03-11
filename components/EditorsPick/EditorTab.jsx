import React, { useRef, useState } from "react";
import Author from "../Reuse/Author";
import PostDate from "../Reuse/Date";
import editors from "../EditorsPick/editors.module.css";
import Link from "next/link";

export default function EditorTab(props) {
	const wrap = useRef();
	const [show, setShow] = useState({ shown: false });

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
			{/* Thumbnail */}
			<div
				className={editors.thumbWrap}
				onClick={() => setShow((pre) => ({ ...pre, shown: !pre.shown }))}
				onMouseOut={() => setShow((pre) => ({ ...pre, shown: false }))}
			>
				<img
					src={props.pick.thumb}
					alt={props.pick.title}
					className={editors.thumb}
				/>
				<div className={editors.authorInfo}>
					<img
						src={props.pick.author.avatar}
						alt={props.pick.author.name}
						className={editors.avatar}
					/>
					<h3 className={editors.name}>{props.pick.author.name}</h3>
				</div>
				<h2 className={editors.category}>{props.pick.categories[0].name}</h2>
			</div>

			{/* Authors Info */}
			<div className={editors.info}>
				<PostDate
					css={editors.date}
					date={new Date(props.pick.published).toDateString()}
					head={true}
				/>

				<div className={editors.wrapTp}>
					<Link href={`/post/${props.pick._id}`}>
						<h2 className={editors.title}>{props.pick.title}</h2>
					</Link>
					<p className={editors.postPreview}>{props.pick.snippet}</p>
				</div>
			</div>

			{/* Read More */}
			<div className={editors.navigate}>
				<Link href={`/post/${props.pick._id}`}>
					<a className={editors.readMore}>Read More</a>
				</Link>
				<div className={editors.circularBtnWrap}>{props.btns}</div>
			</div>
		</div>
	);
}
