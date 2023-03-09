import connectdb from "../db/connect";
import postModel from "../models/post.model";

export default async function trendingController() {
	connectdb();

	const trendingPosts = await postModel.find(
		{},
		{ title: 1, published: 1, thumb: 1 },
	);

	return JSON.stringify(trendingPosts);
}
