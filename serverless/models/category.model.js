const mongoose = require("mongoose");

const schema = new mongoose.Schema({
	name: String,
	posts: {
		type: [mongoose.Schema.Types.ObjectId],
		ref: "Post",
	},
});

module.exports = mongoose.models.Category || mongoose.model("Category", schema);
