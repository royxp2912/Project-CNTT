import express from "express"
import { 
    countByCity,
    createHotel, 
    deleteHotel, 
    getAllHotel, 
    getHotel, 
    updateHotel 
} from "../contorller/hotel.js"
import { verifyAdmin } from "../others/verifyAdmin.js"

const router = express.Router()

// CREATE
router.post("/", verifyAdmin, createHotel)

// UPDATE
router.put("/:id", verifyAdmin, updateHotel)

// DELETE
router.delete("/:id", verifyAdmin, deleteHotel)

// GET
router.get("/find/:id", getHotel)

// GET ALL
router.get("/", getAllHotel)
router.get("/countByCity", verifyAdmin, countByCity)

export default router