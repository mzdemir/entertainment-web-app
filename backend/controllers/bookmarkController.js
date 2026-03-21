// get bookmarks - GET /bookmarks /private

import {Bookmark} from "../models/bookmarksModel.js"

export const getbookmarks = async (req, res) => {
	const bookmarks = await Bookmark.find({user: req.user.id})

	res.status(200).json(bookmarks)
}

// create or delete bookmarks - post /bookmarks /private
export const createOrDeleteBookmark = async (req, res) => {
	const existingBookmark = await Bookmark.findOne({...req.body, user: req.user.id})

	if (existingBookmark) {
		await Bookmark.deleteOne({title: req.body.title})
	} else {
		await Bookmark.create({...req.body, user: req.user.id})
	}

	const bookmarks = await Bookmark.find({user: req.user.id})
	res.status(200).json(bookmarks)
}
