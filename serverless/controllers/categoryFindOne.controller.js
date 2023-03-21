import connectdb from "../db/connect";
import categoryModel from "../models/category.model";

export default async function categoryFindOneController(path) {
	connectdb();

	const category = await categoryModel.findOne({ _id: path }, { _v: 0 });

	return JSON.stringify(category);
}
