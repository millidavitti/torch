import connectdb from "../db/connect";
import categoryModel from "../models/category.model";
import postModel from "../models/post.model";
import generateRandomNumber from "../utils/random";

export default async function relatedController(category, path) {
	connectdb();
	const limit = 4;
	const count = await postModel
		.find({ _id: { $ne: path }, categories: category })
		.count();
	const skip = generateRandomNumber(0, Math.abs(count - limit));

	await categoryModel.count();
	const relatedPosts = await postModel
		.find({ _id: { $ne: path }, categories: category }, { _v: 0 })
		.skip(skip)
		.limit(limit)
		.populate("categories");

	return JSON.stringify(relatedPosts);
}
