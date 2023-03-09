import connectdb from "../db/connect";
import postModel from "../models/post.model";

export default async function relatedController(category) {
	connectdb();

	const relatedPosts = await postModel
		.find({ categories: category }, { _v: 0 })
		.skip(2)
		.limit(4)
		.populate("categories");

	return JSON.stringify(relatedPosts);
}
