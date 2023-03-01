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
				<Author
					ref={wrap}
					cssWrap={editors.authorInfo}
					cssAvatar={editors.avatar}
					cssName={editors.name}
					name={props.pick.author.name}
					src={props.pick.author.avatar}
					show={sho}
				/>
				<h2 className={editors.category}>{props.pick.categories[0]}</h2>
			</div>

			<div className={editors.info}>
				<PostDate
					css={editors.date}
					date={new Date(props.pick.published).toDateString()}
					head={true}
				/>
				<div className={editors.wrapTp}>
					<Link href={`/post/${props.pick.title}`}>
						<h2 className={editors.title}>{props.pick.title}</h2>
					</Link>
					<p className={editors.postPreview}>{props.pick.snippet}</p>
				</div>
			</div>

			<div className={editors.navigate}>
				<Link href={`/post/${props.pick.title}`}>
					<a className={editors.readMore}>Read More</a>
				</Link>
				<div className={editors.circularBtnWrap}>{props.btns}</div>
			</div>
		</div>
	);
}
