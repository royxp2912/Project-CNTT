import User from "../models/Users.js"

export const updateUser = async (req, res, next) => {
    try {
        const updateUser = await User.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true })

        res.status(200).json(updateUser)
    } catch (error) {
        next(error)
    }
}

export const deleteUser = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(req.params.id)

        res.status(200).json("User has been detele.")
    } catch (error) {
        next(error)
    }
}

export const getUser = async (req, res, next) => {
    try {
        const infoUser = await User.findById(req.params.id)

        res.status(200).json(infoUser)
    } catch (error) {
        next(error)
    }
}

export const getAllUser = async (req, res, next) => {
    try {
        const infoUsers = await User.find()

        res.status(200).json(infoUsers)
    } catch (error) {
        next(error)
    }
}