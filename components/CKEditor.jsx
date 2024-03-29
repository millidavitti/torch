import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import React from "react";
import readmore from "./Reuse/CSS/readmore.module.css";
import Margin from "./Reuse/Margin";
let data;
function Editor({ setPost, content }) {
	const handleEditorChange = (_, editor) => {
		data = editor.getData();
	};

	return (
		<div
			className='App'
			style={{
				gridColumn: "1/9",
			}}
			onMouseLeave={() => {
				if (!data) return;
				setPost({
					type: "update",
					target: { type: "editor", id: "content", value: data },
				});
			}}
		>
			<Margin>
				<h2>Content Editor</h2>
				<CKEditor
					editor={ClassicEditor}
					data={content}
					onChange={handleEditorChange}
					onKeyDown={handleEditorChange}
				/>
			</Margin>
			<Margin></Margin>
		</div>
	);
}

export default Editor;
