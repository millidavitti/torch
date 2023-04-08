import authorModel from "../models/author.model";
import bcrypt from "bcrypt";

export default async function lookup({ email, password }) {
	const author = await authorModel.findOne({
		"credentials.email": email,
	});

	const result = await bcrypt.compare(password, author.credentials.pass);

	return result;
}
