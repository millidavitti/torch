import express from "express";
import categoryModel from "../../serverless/models/category.model";
import authorModel from "../../serverless/models/author.model";
import archiveModel from "../../serverless/models/archive.model";
import connectdb from "../../serverless/db/connect";
import menuModel from "../../serverless/models/menu.model";

const api = express();

export default api.get("/api/menus", async (_, res) => {
	connectdb();

	await categoryModel.count();
	await authorModel.count();
	await archiveModel.count();

	const menus = await menuModel.find({}, { _v: 0 }).populate("menu.dropItems");

	res.json(menus);
});
