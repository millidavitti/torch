import React from "react";
import postPage from "./Reuse/CSS/postPage.module.css";
import { Plus, Square } from "phosphor-react";

export default function Tag({ postID }) {
	return (
		<div className={postPage.tagTools}>
			<div className={postPage.toolRack}>
				<Plus
					weight='bold'
					size={20}
					cursor='pointer'
					className={postPage.addTag}
				/>
				<Square
					weight='bold'
					size={20}
					cursor='pointer'
					className={postPage.showMore}
				/>
			</div>
			<div className={postPage.footerTag}>
				{"renderTags"}
				{
					<div className={postPage.tagEntity}>
						<input type='text' />
					</div>
				}
			</div>
		</div>
	);
}
