import express from "express";
import connectdb from "../../serverless/db/connect";
import archiveModel from "../../serverless/models/archive.model";

const api = express();

export default api.get("/api/archive", async (_, res) => {
	connectdb();
	await archiveModel.insertMany([
		{
			_id: "6411c745c6629c49bc355ed3",
			posts: [],
			name: "2023",
		},
		{
			_id: "6411c745c6629c49bc355ed4",
			posts: [],
			name: "2024",
		},
	]);
	const archives = await archiveModel.find({}, { _v: 0 });

	res.json(archives);
});
