import express from "express"
import {getMe, loginUser, registerUser} from "../controllers/userController.js"
import {protect} from "../middlewares/authMiddleware.js"

export const userRouter = express.Router()

userRouter.post("/login", loginUser)
userRouter.post("/sign-up", registerUser)
userRouter.get("/me", protect, getMe)
