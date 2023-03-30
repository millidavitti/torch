import express from "express";
import connectdb from "../../serverless/db/connect";
import postModel from "../../serverless/models/post.model";

import parseQuery from "../../serverless/utils/parseQuery";
const api = express();

export default api.delete("/api/delete-post", async (req, res) => {
	connectdb();
	const {
		filters: { id },
	} = parseQuery(req.query);

	try {
		await postModel.findOneAndDelete({ _id: id });
		res.json({ success: true });
	} catch (error) {
		res.json({ success: false });
	}
});
