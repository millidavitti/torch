import connectdb from "../db/connect";
import postModel from "../models/post.model";

export default async function postPageController(id) {
	connectdb();

	const post = await postModel
		.findOne({ _id: id }, { _v: 0 })
		.populate("author")
		.populate("categories");

	return JSON.stringify(post);
}
