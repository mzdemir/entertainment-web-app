import mongoose from "mongoose"

// prettier-ignore
const bookmarkSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "User"
		},
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
