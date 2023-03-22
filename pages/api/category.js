import express from "express";
import connectdb from "../../serverless/db/connect";
import postModel from "../../serverless/models/post.model";
import parseQuery from "../../serverless/utils/parseQuery";
const api = express();

export default api.get("/api/category", async (req, res) => {
	connectdb();
	const { pag, filters } = parseQuery(req.query);

	const posts = await postModel
		.find({ categories: filters.path }, { _v: 0 })
		.skip(+pag.from || 0)
		.limit(+pag.limit || 2)
		.populate("author")
		.populate("categories");

	res.json(posts);
});
