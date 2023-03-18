import connectdb from "../db/connect";
import archiveModel from "../models/archive.model";

export default async function archiveController() {
	connectdb();

	const archives = await archiveModel.find({}, { _v: 0 });

	return JSON.stringify(archives);
}
