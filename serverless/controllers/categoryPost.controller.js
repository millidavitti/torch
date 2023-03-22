import connectdb from "../db/connect";
import postModel from "../models/post.model";

export default async function categoryPostController(path) {
	connectdb();

	const posts = await postModel
		.find({ categories: path }, { _v: 0 })
		.populate("author")
		.populate("categories");

	const count = await postModel.find({ categories: path }, { _v: 0 }).count();
	return JSON.stringify({ posts, count });
}
