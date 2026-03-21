import mongoose from "mongoose"

const bookmarkSchema = mongoose.Schema(
	{
		user: {type: mongoose.Schema.Types.ObjectId, required: true, ref: "User"},
		title: {type: String, required: true},
		year: {type: Number, required: true},
		category: {type: String, required: true},
		rating: {type: String, required: true},
		thumbnailSrc: {type: String, required: true},
	},
	{timestamps: true},
)

export const Bookmark = mongoose.model("Bookmark", bookmarkSchema)
