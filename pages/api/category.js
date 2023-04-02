import express from "express";
import connectdb from "../../serverless/db/connect";
import categoryModel from "../../serverless/models/category.model";

const api = express();

export default api.get("/api/category", async (req, res) => {
	connectdb();

	const posts = await categoryModel.find({}, { _v: 0 });

	res.json(posts);
});
