import connectdb from "../db/connect";
import postModel from "../models/post.model";

export default async function featuredController() {
	connectdb();

	const fearuredPosts = await postModel
		.findOne({ featured: true }, { _v: 0 })
		.populate("author");

	return JSON.stringify(fearuredPosts);
}
