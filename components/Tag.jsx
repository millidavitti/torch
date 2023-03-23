import React, { useEffect, useReducer } from "react";
import postPage from "./Reuse/CSS/postPage.module.css";
import { Plus, Square } from "phosphor-react";
import { useRouter } from "next/router";
import axios from "axios";

export default function Tag({ tags }) {
	const { postID } = useRouter().query;
	const [state, dispatch] = useReducer(reducer, init);

	useEffect(() => {
		state.update = [];
	}, [postID]);

	async function postTag() {
		if (state.tag.length < 3) return;
		dispatch({ type: "optimistic-update", update: state.tag });
		await axios.post("/api/posts", {
			postID,
			tag: state.tag,
		});
		dispatch({ type: "clear" });
	}
	return (
		<div className={postPage.tagTools}>
			<div className={postPage.toolRack}>
				<Plus
					weight='bold'
					size={20}
					cursor='pointer'
					className={postPage.addTag}
					onClick={postTag}
				/>
			</div>

			{/* Footer Tag */}
			<div className={postPage.footerTag}>
				{tags.map((tag) => (
					<p key={tag} className={postPage.tagEntity}>
						{tag}
					</p>
				))}
				{/* Optimistic Update */}
				{state.update.map((tag) => (
					<p key={tag} className={postPage.tagEntity}>
						{tag}
					</p>
				))}
				{/* Tag Input */}
				{
					<div
						className={postPage.tagEntity}
						style={{ display: !tags.length && "block" }}
					>
						<input
							type='text'
							onChange={({ target }) =>
								dispatch({
									type: "tag-value",
									value: target.value.toLowerCase(),
								})
							}
							value={state.tag}
						/>
					</div>
				}
			</div>
		</div>
	);
}

function reducer(state, action) {
	switch (action.type) {
		case "tag-value":
			return { ...state, tag: action.value };
		case "optimistic-update":
			return { ...state, update: [...state.update, action.update] };
		case "clear":
			return { ...state, tag: "" };
	}
}

const init = {
	tag: "",
	update: [],
};
