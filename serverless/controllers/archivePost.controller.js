import connectdb from "../db/connect";
import authorModel from "../models/author.model";
import categoryModel from "../models/category.model";
import postModel from "../models/post.model";

export default async function archivePostController(archive) {
	connectdb();

	await authorModel.count();
	await categoryModel.count();

	const startDate = new Date(`${archive}-01-01`).toISOString();
	const endDate = new Date(`${archive}-12-31`).toISOString();

	const posts = await postModel
		.find({ published: { $gte: startDate, $lte: endDate } }, { _v: 0 })
		.limit(3)
		.populate("author")
		.populate("categories");

	const count = await postModel
		.find({ published: { $gte: startDate, $lte: endDate } }, { _v: 0 })
		.count();

	return JSON.stringify({ posts, count, archive });
}
