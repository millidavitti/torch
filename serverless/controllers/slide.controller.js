import connectdb from "../db/connect";
import authorModel from "../models/author.model";
import postModel from "../models/post.model";
import generateRandomNumber from "../utils/random";

export default async function slideController() {
	connectdb();
	const limit = 4;
	const count = await postModel.find({}).count();
	const skip = generateRandomNumber(0, Math.abs(count - limit));

	await authorModel.count();

	const slidePosts = await postModel
		.find({}, { _v: 0 })
		.skip(skip)
		.limit(limit)
		.populate("author");

	return JSON.stringify(slidePosts);
}
