import express from "express";
import connectdb from "../../serverless/db/connect";
import menuModel from "../../serverless/models/menu.model";

import parseQuery from "../../serverless/utils/parseQuery";
const api = express();

export default api.get("/api/menus", async (req, res) => {
	connectdb();
	const { filters, pag } = parseQuery(req.query);
	// console.log(query);
	const menus = await menuModel.find({}, { _v: 0 });

	res.json(menus);
});
