import connectdb from "../db/connect";
import categoryModel from "../models/category.model";
import postModel from "../models/post.model";

export default async function layoutOneController() {
	connectdb();

	await categoryModel.count();

	const layoutOnePosts = await postModel
		.find(
			{
				categories: { $elemMatch: { $eq: "63fbc020acb6c62315bf0aaa" } },
				featured: false,
				editorsPick: false,
			},
			{ _v: 0 },
		)
		.limit(3)
		.populate("categories");

	return JSON.stringify(layoutOnePosts);
}
