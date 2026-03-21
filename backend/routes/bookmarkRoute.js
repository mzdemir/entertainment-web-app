import express from "express"
import {getbookmarks, createOrDeleteBookmark} from "../controllers/bookmarkController.js"
import {protect} from "../middlewares/authMiddleware.js"

export const bookmarkRouter = express.Router()

bookmarkRouter.get("/", protect, getbookmarks)

bookmarkRouter.post("/", protect, createOrDeleteBookmark)
