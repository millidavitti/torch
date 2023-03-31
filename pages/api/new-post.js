import express from "express";
import connectdb from "../../serverless/db/connect";
import postModel from "../../serverless/models/post.model";

const api = express();

export default api.post("/api/new-post", async (req, res) => {
	connectdb();

	const { post } = req.body;

	post.isPublished = true;
	const modPost = {
		...post,
		categories: [post.categories[0]._id],
		author: post.author._id,
	};
	try {
		await postModel.findOneAndUpdate({ title: modPost.title }, modPost, {
			upsert: true,
		});
		res.json({ success: true });
	} catch (error) {
		res.json({ success: false });
	}
});
