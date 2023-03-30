import express from "express";
import connectdb from "../../serverless/db/connect";
import postModel from "../../serverless/models/post.model";
import categoryModel from "../../serverless/models/category.model";
import authorModel from "../../serverless/models/author.model";

import parseQuery from "../../serverless/utils/parseQuery";
const api = express();

export default api.post("/api/new-post", async (req, res) => {
	const { post } = req.body;

	post.isPublished = true;
	const modPost = {
		...post,
		categories: [post.categories[0]._id],
		author: post.author._id,
	};

	const data = await postModel.findOneAndUpdate(
		{ title: modPost.title },
		modPost,
		{
			upsert: true,
		},
	);
	if (!data) return res.json({ success: false });
	res.json({ success: true });
});
