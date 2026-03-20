import mongoose from "mongoose"

const userSchema = mongoose.Schema(
	{
		email: {type: String, required: [true, "please add a email"], unique: true},
		password: {type: String, required: [true, "please add a password"]},
	},
	{timestamps: true},
)

export const userModal = mongoose.model("User", userSchema)
