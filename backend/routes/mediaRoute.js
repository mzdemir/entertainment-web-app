import express from "express"
import {fetchMedia} from "../controllers/mediaController.js"
import {protect} from "../middlewares/authMiddleware.js"

export const mediaRouter = express.Router()

mediaRouter.get("/", protect, fetchMedia)
