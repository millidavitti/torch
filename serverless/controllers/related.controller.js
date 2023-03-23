import connectdb from "../db/connect";
import postModel from "../models/post.model";
import generateRandomNumber from "../utils/random";

export default async function relatedController(category, path) {
	connectdb();
	const limit = 4;
	const count = await postModel.count();
	const skip = generateRandomNumber(0, count - limit);

	const relatedPosts = await postModel
		.find({ _id: { $ne: path }, categories: category }, { _v: 0 })
		.skip(skip)
		.limit(limit)
		.populate("categories");

	return JSON.stringify(relatedPosts);
}
