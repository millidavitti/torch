import express from "express";
import connectdb from "../../serverless/db/connect";
import archiveModel from "../../serverless/models/archive.model";

const api = express();

export default api.get("/api/archives", async (req, res) => {
	connectdb();

	const archives = await archiveModel.find({}, { __v: 0 });

	res.json(archives);
});
