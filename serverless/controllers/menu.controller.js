import connectdb from "../db/connect";
import archiveModel from "../models/archive.model";
import authorModel from "../models/author.model";
import categoryModel from "../models/category.model";
import menuModel from "../models/menu.model";

export default async function menuController() {
	connectdb();

	await authorModel.count();
	await archiveModel.count();
	await categoryModel.count();

	const menus = await menuModel.find({}, { _v: 0 }).populate("menu.dropItems");

	return JSON.stringify(menus);
}
