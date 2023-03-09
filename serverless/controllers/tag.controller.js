import connectdb from "../db/connect";
import postModel from "../models/post.model";

export default async function tagController() {
	connectdb();

	const tags = await postModel.find({}, { _v: 0 }).populate("author");

	return JSON.stringify(tags);
}
