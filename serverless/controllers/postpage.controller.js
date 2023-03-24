import connectdb from "../db/connect";
import authorModel from "../models/author.model";
import categoryModel from "../models/category.model";
import postModel from "../models/post.model";

export default async function postPageController(id) {
	connectdb();

	await authorModel.count();
	await categoryModel.count();

	const post = await postModel
		.findOne({ _id: id }, { _v: 0 })
		.populate("author")
		.populate("categories");

	return JSON.stringify(post);
}
