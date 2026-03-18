import express from "express"
import {getbookmarks, createbookmark, updateBookmarks, deleteBookmark} from "../controllers/bookmarkController.js"
import {protect} from "../middlewares/authMiddleware.js"
export const apiRouter = express.Router()

apiRouter.get("/", protect, getbookmarks)

apiRouter.post("/", protect, createbookmark)

apiRouter.put("/:id", protect, updateBookmarks)

apiRouter.delete("/:id", protect, deleteBookmark)
