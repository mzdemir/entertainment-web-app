import mongoose from "mongoose"

const bookmarkSchema = mongoose.Schema(
	{
		text: {
			type: String,
			required: true,
			//
			//
		},
	},
	{timestamps: true},
)

export const Bookmark = mongoose.model("Bookmark", bookmarkSchema)
