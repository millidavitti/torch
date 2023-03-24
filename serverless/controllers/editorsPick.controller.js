import connectdb from "../db/connect";
import authorModel from "../models/author.model";
import postModel from "../models/post.model";

export default async function editorsPickController() {
	connectdb();

	await authorModel.count();

	const editorsPicks = await postModel
		.find({ editorsPick: true }, { _v: 0 })
		.populate("author");

	return JSON.stringify(editorsPicks);
}
