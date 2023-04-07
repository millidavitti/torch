import express from "express";
import hash from "../../serverless/utils/hashingFn";
import parseQuery from "../../serverless/utils/parseQuery";
("torchCMS?");

const api = express();

export default api.get("/api/hashPass", (req, res) => {
	const { password } = parseQuery(req.query).filters;

	try {
		hash(password, +saltRounds);
		return res.json({ error: "Hashing Successful", success: true });
	} catch (error) {
		return res.json({ error: "Hashing failed", success: false });
	}
});
