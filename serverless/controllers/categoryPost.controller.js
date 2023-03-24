import connectdb from "../db/connect";
import authorModel from "../models/author.model";
import categoryModel from "../models/category.model";
import postModel from "../models/post.model";

export default async function categoryPostController(path) {
	connectdb();

	await authorModel.count();
	await categoryModel.count();

	const posts = await postModel
		.find({ categories: path }, { _v: 0 })
		.limit(3)
		.populate("author")
		.populate("categories");

	const count = await postModel.find({ categories: path }, { _v: 0 }).count();
	return JSON.stringify({ posts, count, path });
}
