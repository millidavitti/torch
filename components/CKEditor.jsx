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
			<Margin>
				<button
					className={readmore.readMore}
					style={{ textAlign: "center" }}
					onClick={() =>
						setPost({
							type: "update",
							target: { type: "editor", id: "content", value: data },
						})
					}
				>
					Save Content
				</button>
			</Margin>
		</div>
	);
}

export default Editor;
