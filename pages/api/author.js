import express from "express";
import connectdb from "../../serverless/db/connect";
import authorModel from "../../serverless/models/author.model";

const api = express();

export default api.get("/api/author", async (req, res) => {
	connectdb();

	const author = await authorModel.findOne({}, { _v: 0 });

	res.json(author);
});
