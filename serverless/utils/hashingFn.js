import { hash as _hash } from "bcrypt";
import connectdb from "../db/connect";
import authorModel from "../models/author.model";

export default function hash(plainTextPassword, saltRounds = 10) {
	_hash(plainTextPassword, saltRounds, async function (err, hash) {
		// Store hash in your password DB.
		connectdb();
		await authorModel.findOneAndUpdate(
			{ _id: "640929a8e0cc242fca61cd3b" },
			{ "credentials.pass": hash },
			{ upsert: true },
		);
	});
}
