import connectdb from "../db/connect";
import archiveModel from "../models/archive.model";

export default async function archiveFindOneController(id) {
	connectdb();

	const archive = await archiveModel.findOne({ _id: id }, { _v: 0 });

	return JSON.stringify(archive);
}
