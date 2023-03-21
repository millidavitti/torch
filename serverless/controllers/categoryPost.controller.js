import connectdb from "../db/connect";
import postModel from "../models/post.model";

export default async function categoryPostController(path) {
	connectdb();

	const posts = await postModel
		.find({ categories: path }, { _v: 0 })
		.populate("author")
		.populate("categories");

	return JSON.stringify(posts);
}
