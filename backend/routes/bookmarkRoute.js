import express from "express"
import {getbookmarks, createbookmark, updateBookmarks, deleteBookmark} from "../controllers/bookmarkController.js"

export const apiRouter = express.Router()

apiRouter.get("/", getbookmarks)

apiRouter.post("/", createbookmark)

apiRouter.put("/:id", updateBookmarks)

apiRouter.delete("/:id", deleteBookmark)
