import express from "express";
import connectdb from "../../serverless/db/connect";
import postModel from "../../serverless/models/post.model";
import categoryModel from "../../serverless/models/category.model";
import authorModel from "../../serverless/models/author.model";

import parseQuery from "../../serverless/utils/parseQuery";
const api = express();

export default api.get("/api/posts", async (req, res) => {
	connectdb();
	const { pag } = parseQuery(req.query);

	await categoryModel.count();
	await authorModel.count();
	const posts = await postModel
		.find({}, { _v: 0 })
		.sort("-_id")
		.skip(+pag.from || 0)
		.limit(+pag.limit || 2)
		.populate("categories")
		.populate("author");

	res.json(posts);
});
