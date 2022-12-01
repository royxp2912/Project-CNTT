import Users from "../models/Users.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { createError } from "../others/error.js"

export const register = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt)

        const newUser = new Users({
            username: req.body.username,
            email: req.body.email,
            password: hash
        })

        await newUser.save()
        res.status(200).send("User has been create.")
    } catch (error) {
        next(error)
    }
}

export const login = async (req, res, next) => {
    try {
        const user = await Users.findOne({ username: req.body.username })
        if (!user) {
            return next(createError(404, "User not found!"))
        }

        const isPassword = await bcrypt.compare(req.body.password, user.password)
        if (!isPassword) {
            return next(createError(404, "Wrong password or username!"))
        }

        const token = jwt.sign({id: user._id, isAdmin: user.isAdmin}, process.env.JWT)

        const { password, isAdmin, ...otherInfo } = user._doc
        res.cookie("access_token", token, {
            httpOnly: true
        }).status(200).json({ ...otherInfo })
    } catch (error) {
        next(error)
    }
}