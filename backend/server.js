import express from "express"
import dotenv from "dotenv"
import {apiRouter} from "./routes/bookmarkRoute.js"
import {userRouter} from "./routes/userRoutes.js"
import {errorHandler} from "./middlewares/errorMiddleware.js"
import {connectDB} from "./config/mongodb.js"

dotenv.config()
connectDB()

const PORT = process.env.PORT
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/bookmarks", apiRouter)
app.use("/users", userRouter)

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
