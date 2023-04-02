import authorModel from "../../serverless/models/author.model";
import categoryModel from "../../serverless/models/category.model";
import postModel from "../../serverless/models/post.model";
import connectdb from "../../serverless/db/connect";
import express from "express";
import parseQuery from "../../serverless/utils/parseQuery";

const api = express();

export default api.get("/api/archive-posts", async (req, res) => {
	connectdb();

	const { filters, pag } = parseQuery(req.query);
	console.log(filters, pag);

	await authorModel.count();
	await categoryModel.count();

	const startDate = new Date(`${filters.archive || 2023}-01-01`).toISOString();
	const endDate = new Date(`${filters.archive || 2023}-12-31`).toISOString();

	const posts = await postModel
		.find({ published: { $gte: startDate, $lte: endDate } }, { _v: 0 })
		.skip(+pag.from || 0)
		.limit(+pag.limit || 2)
		.populate("author")
		.populate("categories");

	const count = await postModel
		.find({ published: { $gte: startDate, $lte: endDate } }, { _v: 0 })
		.count();

	res.json({ posts, count });
});
