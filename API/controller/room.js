import Room from "../models/Rooms.js"
import Hotel from "../models/Hotels.js"

export const createRoom = async (req, res, next) => {
    const hotelId = req.params.hotelId
    const newRoom = new Room(req.body)

    try {
        const savedRoom = await newRoom.save()
        try {
            await Hotel.findByIdAndUpdate(hotelId, { $push: { rooms: savedRoom._id } })
        } catch (error) {
            next(error)
        }
        res.status(200).json(savedRoom)
    } catch (error) {
        next(error)
    }
}

export const updateRoom = async (req, res, next) => {
    try {
        const updateRoom = await Room.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true })

        res.status(200).json(updateRoom)
    } catch (error) {
        next(error)
    }
}

export const deleteRoom = async (req, res, next) => {
    const hotelId = req.params.hotelId
    try {
        await Room.findByIdAndDelete(req.params.id)
        
        try {
            await Hotel.findByIdAndUpdate(hotelId, { $pull: { rooms: req.params.id } })
        } catch (error) {
            next(error)
        }

        res.status(200).json("Room has been detele.")
    } catch (error) {
        next(error)
    }
}

export const getRoom = async (req, res, next) => {
    try {
        const infoRoom = await Room.findById(req.params.id)

        res.status(200).json(infoRoom)
    } catch (error) {
        next(error)
    }
}

export const getAllRoom = async (req, res, next) => {
    try {
        const infoRooms = await Room.find()

        res.status(200).json(infoRooms)
    } catch (error) {
        next(error)
    }
}