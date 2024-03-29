import connectdb from "../db/connect";
import authorModel from "../models/author.model";
import postModel from "../models/post.model";

export default async function tagController() {
	connectdb();

	await authorModel.count();

	const tags = await postModel.find({}, { _v: 0 }).populate("author");

	return JSON.stringify(tags);
}
