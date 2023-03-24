import connectdb from "../db/connect";
import categoryModel from "../models/category.model";
import postModel from "../models/post.model";

export default async function travelController() {
	connectdb();

	await categoryModel.count();

	const travelPosts = await postModel
		.find({ categories: "63fbc020acb6c62315bf0aaa" }, { _v: 0 })
		.limit(3)
		.populate("categories");

	return JSON.stringify(travelPosts);
}
