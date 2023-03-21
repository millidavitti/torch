const mongoose = require("mongoose");

const schema = new mongoose.Schema({
	menu: {
		name: String,
		isDropDown: Boolean,
		dropItems: [
			{
				type: mongoose.Schema.Types.ObjectId,
				refPath: "menu.model",
			},
		],
		model: {
			type: String,
			required: true,
			enum: ["Category", "Archive", "Author"],
		},
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

// [
// 	{
// 		_id: ObjectId("63fde62bacb6c62315bf0aad"),
// 		menu: {
// 			id: "/",
// 			name: "Home",
// 			isdropDown: false,
// 			dropItems: [],
// 			dropItemModel: "",
// 		},
// 	},

// 	{
// 		_id: ObjectId("63fde62bacb6c62315bf0aae"),
// 		menu: {
// 			id: "categories",
// 			name: "Categories",
// 			isdropDown: true,
// 			dropItems: [
// 				ObjectId("63fbc020acb6c62315bf0aa8"),
// 				ObjectId("63fbc020acb6c62315bf0aa9"),
// 				ObjectId("63fbc020acb6c62315bf0aaa"),
// 			],
// 			dropItemModel: "Category",
// 		},
// 	},

// 	{
// 		_id: ObjectId("63fde62bacb6c62315bf0aaf"),
// 		menu: {
// 			id: "archive",
// 			name: "Archive",
// 			isdropDown: true,
// 			dropItems: [],
// 			dropItemModel: "Archive",
// 		},
// 	},

// 	{
// 		_id: ObjectId("63fde62bacb6c62315bf0ab0"),
// 		menu: {
// 			id: "author",
// 			name: "Author",
// 			isdropDown: false,
// 			dropItems: [],
// 			dropItemModel: "Author",
// 		},
// 	},
// ];
