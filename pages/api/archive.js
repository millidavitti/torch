import express from "express";
import connectdb from "../../serverless/db/connect";
import archiveModel from "../../serverless/models/archive.model";

const api = express();

export default api.get("/api/archive", async (_, res) => {
	connectdb();

	const menus = await archiveModel.find({}, { _v: 0 });

	res.json(menus);
});
