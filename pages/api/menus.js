import express from "express";
import archiveController from "../../serverless/controllers/archive.controller";
import authorController from "../../serverless/controllers/author.controller";
import categoryController from "../../serverless/controllers/category.controller";
import connectdb from "../../serverless/db/connect";
import menuModel from "../../serverless/models/menu.model";

const api = express();

export default api.get("/api/menus", async (req, res) => {
	connectdb();

	categoryController();
	archiveController();
	authorController();

	const menus = await menuModel.find({}, { _v: 0 }).populate("menu.dropItems");

	res.json(menus);
});
