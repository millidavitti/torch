const mongoose = require("mongoose");

const schema = new mongoose.Schema({
	name: String,
	isDropDown: Boolean,
	dropItems: {
		type: [mongoose.Schema.Types.ObjectId],
		refPath: "dropItemModel",
	},
	dropItemModel: {
		type: mongoose.Schema.Types.ObjectId,
		enum: ["Category", "Archive", "Author"],
	},
});

module.exports = mongoose.models.Menu || mongoose.model("Menu", schema);

/**
 * what I understand from this so far
 * Define the field object type and use a refPath instead of ref
 *
 * Define the refPath object
 *
 * When creating a document passing your desired value
 *
 * Populate
 */
