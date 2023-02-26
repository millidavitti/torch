import connectdb from "../db/connect";
import postModel from "../models/post.model";

export default async function postController() {
	connectdb();

	const posts = await postModel.find({}, { _v: 0 }).populate("author");

	return JSON.stringify(posts);
}
