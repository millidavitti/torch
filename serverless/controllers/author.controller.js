import connectdb from "../db/connect";
import authorModel from "../models/author.model";
import postModel from "../models/post.model";

export default async function authorController(single = true) {
	connectdb();

	await postModel.count();
	const author = single
		? await authorModel.findOne({}, { _v: 0 }).populate("posts")
		: await authorModel.find({}, { _v: 0 }).populate("posts");

	return JSON.stringify(author);
}

// {"_id": ObjectId("63fa4c51acb6c62315bf0aa1"),"name":"First Post","author":ObjectId("63fa4c7eacb6c62315bf0aa2")}
// {"_id":ObjectId("63fa503cacb6c62315bf0aa3"),"name":"Second Post","author":ObjectId("63fa4c7eacb6c62315bf0aa2")}

// {"_id":ObjectId("63fa4c7eacb6c62315bf0aa2"),"name":"Donald Abua","posts":[ObjectId("63fa4c51acb6c62315bf0aa1"),ObjectId("63fa503cacb6c62315bf0aa3")]}
