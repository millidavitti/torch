import connectdb from "../db/connect";
import authorModel from "../models/author.model";
import postModel from "../models/post.model";

export default async function slideController() {
	connectdb();

	await authorModel.count();

	const slidePosts = await postModel
		.find({}, { _v: 0 })
		.limit(4)
		.populate("author");

	return JSON.stringify(slidePosts);
}
