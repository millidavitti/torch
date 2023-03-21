const mongoose = require("mongoose");

const schema = new mongoose.Schema({
	name: String,
	posts: {
		type: [mongoose.Schema.Types.ObjectId],
		ref: "Post",
	},
});

module.exports = mongoose.models.Archive || mongoose.model("Archive", schema);
