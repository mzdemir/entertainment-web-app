// get bookmarks - GET /bookmarks /private

import {Bookmark} from "../models/bookmarksModel.js"
import {userModal} from "../models/userModel.js"

export const getbookmarks = async (req, res) => {
	const bookmarks = await Bookmark.find({user: req.user.id})

	res.status(200).json(bookmarks)
}

// create bookmarks - post /bookmarks /private
export const createbookmark = async (req, res) => {
	// posting form data - urlencoded
	if (!req.body?.text) {
		res.status(400)
		throw new Error("please add a text field")
	}

	const bookmark = await Bookmark.create({text: req.body.text, user: req.user.id})

	res.json(bookmark)
}

export const updateBookmarks = async (req, res) => {
	const bookmark = await Bookmark.findById(req.params.id)
	if (!bookmark) {
		res.status(400)
		throw new Error("Goal not found")
	}

	const user = await userModal.findById(req.user.id)
	// check for user
	if (!user) {
		res.status(401)
		throw new Error("User Not Found")
	}

	// make sure the logged in user matches the bookmark user
	if (bookmark.user.toString() !== user.id) {
		res.status(401)
		throw new Error("User not authorized")
	}

	const updatedGoal = await Bookmark.findByIdAndUpdate(req.params.id, req.body, {new: true})

	res.json(updatedGoal)
}

export const deleteBookmark = async (req, res) => {
	const bookmark = await Bookmark.findById(req.params.id)

	if (!bookmark) {
		res.status(400)
		throw new Error("Goal not found")
	}

	const user = await userModal.findById(req.user.id)
	// check for user
	if (!user) {
		res.status(401)
		throw new Error("User Not Found")
	}

	// make sure the logged in user matches the bookmark user
	if (bookmark.user.toString() !== user.id) {
		res.status(401)
		throw new Error("User not authorized")
	}

	await Bookmark.findByIdAndDelete(req.params.id)
	res.status(200).json({id: req.params.id})
}
