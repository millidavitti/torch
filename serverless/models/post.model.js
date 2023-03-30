const mongoose = require("mongoose");

const schema = new mongoose.Schema({
	title: {
		type: String,
		unique: true,
	},
	content: String,
	published: Date,
	thumb: {
		type: String,
		unique: true,
	},
	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Author",
	},
	categories: {
		type: [mongoose.Schema.Types.ObjectId],
		ref: "Category",
	},
	snippet: String,
	updated: Date,
	editorsPick: Boolean,
	featured: Boolean,
	tags: [String],
	isPublished: Boolean,
});

module.exports = mongoose.models.Post || mongoose.model("Post", schema);
