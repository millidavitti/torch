import express from "express";
import connectdb from "../../serverless/db/connect";
import postModel from "../../serverless/models/post.model";
import parseQuery from "../../serverless/utils/parseQuery";
const api = express();

export default api.get("/api/posts", async (req, res) => {
	connectdb();
	const { filters, pag } = parseQuery(req.query);
	// console.log(query);
	const posts = await postModel
		.find({}, { _v: 0 })
		.sort("-date")
		.skip(+pag.from || 0)
		.limit(+pag.limit || 5)
		.populate("categories")
		.populate("author");

	res.json(posts);
});