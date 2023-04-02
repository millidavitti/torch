import connectdb from "../../serverless/db/connect";
import authorModel from "../../serverless/models/author.model";
import categoryModel from "../../serverless/models/category.model";
import postModel from "../../serverless/models/post.model";
import express from "express";
import parseQuery from "../../serverless/utils/parseQuery";

const api = express();

export default api.get("/api/category-posts", async (req, res) => {
	connectdb();

	const { filters, pag } = parseQuery(req.query);

	await authorModel.count();
	await categoryModel.count();

	const posts = await postModel
		.find({ categories: { $elemMatch: { $eq: filters.category } } }, { _v: 0 })
		.sort("-_id")
		.skip(+pag.from || 0)
		.limit(+pag.limit || 2)
		.populate("author");

	return res.json(posts);
});
