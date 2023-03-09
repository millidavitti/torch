import connectdb from "../db/connect";
import postModel from "../models/post.model";

export default async function editorsPickController() {
	connectdb();

	const editorsPicks = await postModel
		.find({ editorsPick: true }, { _v: 0 })
		.populate("author");

	return JSON.stringify(editorsPicks);
}
