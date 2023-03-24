import connectdb from "../db/connect";
import authorModel from "../models/author.model";
import categoryModel from "../models/category.model";
import postModel from "../models/post.model";

export default async function healthController() {
	connectdb();

	await categoryModel.count();
	await authorModel.count();

	const healthPosts = await postModel
		.find({ categories: "63fbc020acb6c62315bf0aa9" }, { _v: 0 })
		.limit(7)
		.populate("categories")
		.populate("author");

	return JSON.stringify(healthPosts);
}
