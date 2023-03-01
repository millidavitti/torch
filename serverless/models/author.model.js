const mongoose = require("mongoose");

const schema = new mongoose.Schema({
	name: String,
	avatar: String,
	posts: {
		type: [mongoose.Schema.Types.ObjectId],
		ref: "Post",
	},
});

module.exports = mongoose.models.Author || mongoose.model("Author", schema);
