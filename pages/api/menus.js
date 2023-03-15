import express from "express";
import connectdb from "../../serverless/db/connect";
import menuModel from "../../serverless/models/menu.model";

const api = express();

export default api.get("/api/menus", async (_, res) => {
	connectdb();

	const menus = await menuModel.find({}, { _v: 0 }).populate("menu.dropItems");

	res.json(menus);
});
