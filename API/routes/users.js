import express from "express"
import {
    deleteUser, 
    getAllUser, 
    getUser, 
    updateUser
} from "../contorller/user.js"
import { verifyAdmin } from "../others/verifyAdmin.js"
import { verifyToken } from "../others/verifyToken.js"
import { verifyUser } from "../others/verifyUser.js"

const router = express.Router()

//UPDATE USER
router.put("/:id", verifyUser, updateUser)

//DELETE USER
router.delete("/:id", verifyUser, deleteUser)

//GET USER
router.get("/:id", verifyUser, getUser)

//GET ALL USER
router.get("/", verifyAdmin, getAllUser)

export default router