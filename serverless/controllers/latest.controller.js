import connectdb from "../db/connect";
import postModel from "../models/post.model";

export default async function latestController() {
	connectdb();

	const latestPosts = await postModel
		.find({}, { _v: 0 })
		.limit(5)
		.sort("-date")
		.populate("categories")
		.populate("author");

	return JSON.stringify(latestPosts);
}
