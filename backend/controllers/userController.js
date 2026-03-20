import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import {userModal} from "../models/userModel.js"

// register user POST "/users /public"
export const registerUser = async (req, res) => {
	const {email, password} = req.body
	if (!email || !password) {
		res.status(400)
		throw new Error("Please add all fields")
	}

	const userExists = await userModal.findOne({email})
	if (userExists) {
		res.status(400)
		throw new Error("User already exists")
	}

	const salt = await bcrypt.genSalt(10)
	const hashedPassword = await bcrypt.hash(password, salt)

	const user = await userModal.create({email, password: hashedPassword})
	// prettier-ignore
	if (user) {
		res.status(201).json({
      _id: user.id, 
      email: user.email, 
      token: generateToken(user._id)
    })
	} else {
		res.status(400)
		throw new Error("Invalid user data")
	}

	res.json({message: "register user"})
}

// login a user POST "/users/login /public"
export const loginUser = async (req, res) => {
	const {email, password} = req.body
	const user = await userModal.findOne({email})

	// prettier-ignore
	if (user && (await bcrypt.compare(password, user.password))) {
		res.json({
      _id: user.id, 
      email: user.email, 
      token: generateToken(user._id)
    })
	} else {
		res.status(400)
		throw new Error("Invalid credentials")
	}

	res.json({message: "login user"})
}

// get user data get "/users/login/me /private"
export const getMe = async (req, res) => {
	const {_id, email} = await userModal.findById(req.user.id)
	res.status(200).json({id: _id, email})
}

const generateToken = id => {
	return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: "30d"})
}
