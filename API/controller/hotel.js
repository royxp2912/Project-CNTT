import Hotel from "../models/Hotels.js"

export const createHotel = async (req, res, next) => {
    const newHotel = new Hotel(req.body)

    try {
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    } catch (error) {
        next(error)
    }
}

export const updateHotel = async (req, res, next) => {
    try {
        const updateHotel = await Hotel.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true })

        res.status(200).json(updateHotel)
    } catch (error) {
        next(error)
    }
}

export const deleteHotel = async (req, res, next) => {
    try {
        await Hotel.findByIdAndDelete(req.params.id)

        res.status(200).json("Hotel has been detele.")
    } catch (error) {
        next(error)
    }
}

export const getHotel = async (req, res, next) => {
    try {
        const infoHotel = await Hotel.findById(req.params.id)

        res.status(200).json(infoHotel)
    } catch (error) {
        next(error)
    }
}

export const getAllHotel = async (req, res, next) => {
    try {
        const infoHotels = await Hotel.find()

        res.status(200).json(infoHotels)
    } catch (error) {
        next(error)
    }
}


export const countByCity = async (req, res, next) => {
    const cities = req.query.cities.split(",")
    try {
        const listCount = await Promise.all(cities.map(city =>
            Hotel.countDocuments({ city: city })
        ))

        res.status(200).json(listCount)
    } catch (error) {
        next(error)
    }
}