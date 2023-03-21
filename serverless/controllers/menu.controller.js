import connectdb from "../db/connect";
import menuModel from "../models/menu.model";

export default async function menuController() {
	connectdb();

	const menus = await menuModel.find({}, { _v: 0 }).populate("menu.dropItems");

	return JSON.stringify(menus);
}
