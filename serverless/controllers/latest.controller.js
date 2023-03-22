import connectdb from "../db/connect";
import postModel from "../models/post.model";

export default async function latestController() {
	connectdb();

	const latestPosts = await postModel
		.find({}, { _v: 0 })
		.limit(3)
		.sort("-_id")
		.populate("categories")
		.populate("author");

	const count = await postModel.count();

	return JSON.stringify({ latestPosts, count });
}
