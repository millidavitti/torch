import authorModel from "../../serverless/models/author.model";
import categoryModel from "../../serverless/models/category.model";
import postModel from "../../serverless/models/post.model";
import connectdb from "../../serverless/db/connect";
import express from "express";
import parseQuery from "../../serverless/utils/parseQuery";

const api = express();

export default api.get("/api/tags", async (req, res) => {
	connectdb();

	const { filters } = parseQuery(req.query);

	await authorModel.count();
	await categoryModel.count();

	const posts = await postModel
		.find({ tags: { $elemMatch: { $eq: filters.tagName } } }, { _v: 0 })
		.limit(3)
		.populate("author")
		.populate("categories");

	const count = await postModel
		.find({ tags: { $elemMatch: { $eq: filters.tagName } } }, { _v: 0 })
		.count();

	res.json({ posts, count });
});
