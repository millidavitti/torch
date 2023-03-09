import connectdb from "../db/connect";
import postModel from "../models/post.model";

export default async function trendingController() {
	connectdb();

	const trendingPosts = await postModel.find({}, { title: 1, date: 1 });

	return JSON.stringify(trendingPosts);
}
