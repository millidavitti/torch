import connectdb from "../db/connect";
import postModel from "../models/post.model";

export default async function categoryPostController(id) {
	connectdb();

	const posts = await postModel
		.find({ categories: id }, { _v: 0 })
		.populate("author")
		.populate("categories");

	return JSON.stringify(posts);
}
