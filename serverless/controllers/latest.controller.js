import connectdb from "../db/connect";
import authorModel from "../models/author.model";
import categoryModel from "../models/category.model";
import postModel from "../models/post.model";

export default async function latestController() {
	connectdb();

	await categoryModel.count();
	await authorModel.count();

	const latestPosts = await postModel
		.find({}, { _v: 0 })
		.limit(3)
		.sort("-_id")
		.populate("categories")
		.populate("author");

	const count = await postModel.count();

	return JSON.stringify({ latestPosts, count });
}
