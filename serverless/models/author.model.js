const mongoose = require("mongoose");

const schema = new mongoose.Schema({
	name: String,
	avatar: String,
	posts: {
		type: [mongoose.Schema.Types.ObjectId],
		ref: "Post",
	},
	bio: String,
	socials: {
		instagram: String,
		twitter: String,
	},
});

module.exports = mongoose.models.Author || mongoose.model("Author", schema);

/**
 * Photo by <a href="https://unsplash.com/@princearkman?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Prince Akachi</a> on <a href="https://unsplash.com/photos/4Yv84VgQkRM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
 */
