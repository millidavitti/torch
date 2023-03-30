import express from "express";
import connectdb from "../../serverless/db/connect";
import authorModel from "../../serverless/models/author.model";

const api = express();

export default api.get("/api/authors", async (_, res) => {
	connectdb();

	const authors = await authorModel.find({}, { _v: 0 });

	res.json(authors);
});
