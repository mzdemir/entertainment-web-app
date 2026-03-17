// get bookmarks - GET /bookmarks /private

import {Bookmark} from "../models/bookmarksModel.js"

export const getbookmarks = async (req, res) => {
	const bookmarks = await Bookmark.find()

	res.status(200).json(bookmarks)
}

// create bookmarks - post /bookmarks /private
export const createbookmark = (req, res) => {
	// posting form data - urlencoded
	if (!req.body?.text) {
		res.status(400)
		throw new Error("please add a text field")
	}
	res.json({message: "set bookmark"})
}

export const updateBookmarks = (req, res) => {
	res.json({message: `update bookmark ${req.params.id}`})
}

export const deleteBookmark = (req, res) => {
	res.json({message: `delete bookmark ${req.params.id}`})
}
