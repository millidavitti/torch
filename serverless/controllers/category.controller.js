import connectdb from "../db/connect";
import categoryModel from "../models/category.model";

export default async function categoryController() {
	connectdb();

	const categories = await categoryModel.find({}, { _v: 0 });

	return JSON.stringify(categories);
}
