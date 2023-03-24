import connectdb from "../db/connect";
import postModel from "../models/post.model";

export default async function tagPostController(tagName) {
	connectdb();

	const posts = await postModel
		.find({ tags: { $elemMatch: { $eq: tagName } } }, { _v: 0 })
		.limit(3)
		.populate("author")
		.populate("categories");

	const count = await postModel
		.find({ tags: { $elemMatch: { $eq: tagName } } }, { _v: 0 })
		.count();

	return JSON.stringify({ posts, count, tagName });
}
