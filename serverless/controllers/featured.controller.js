import connectdb from "../db/connect";
import postModel from "../models/post.model";

export default async function featuredController() {
	connectdb();

	const fearuredPosts = await postModel
		.findOne({ featured: true }, { thumb: 1, title: 1, author: 1 })
		.populate("author");

	return JSON.stringify(fearuredPosts);
}
