import connectdb from "../db/connect";
import postModel from "../models/post.model";

export default async function slideController() {
	connectdb();

	const slidePosts = await postModel
		.find({}, { _v: 0 })
		.limit(4)
		.populate("author");

	return JSON.stringify(slidePosts);
}
