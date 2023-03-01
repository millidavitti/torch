const mongoose = require("mongoose");

const schema = new mongoose.Schema({
	title: String,
	content: String,
	published: Date,
	thumb: String,
	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Author",
	},
	categories: [String],
	snippet: String,
	updated: Date,
	editorsPick: Boolean,
	featured: Boolean,
	tag: [String],
});

module.exports = mongoose.models.Post || mongoose.model("Post", schema);
