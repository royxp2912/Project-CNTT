import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auths.js"
import usersRoute from "./routes/users.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"
import cookieParser from "cookie-parser"

const app = express()

dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO)
        console.log("Connected to mongodb");
    } catch (error){
        throw error
    }
}

mongoose.connection.on("disconnected", () => {
    console.log("MongoDB Disconnected")
})

mongoose.connection.on("connected", () => {
    console.log("MongoDB Connected")
})

// middlewares
// app.use(bodyParser.json({ limit: '50000mb' }));
// app.use(bodyParser.urlencoded({ limit: '50000mb', extended: true }));
// app.use(
//   express.urlencoded({
//     extended: true,
//   })
// );
// app.use(cors({ credentials: true, origin: true }));
//app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }))



// app.options('*', cors({ credentials: true, origin: true }));

app.use(cookieParser())
app.use(express.json())

app.use("/api/v1/auth", authRoute)
app.use("/api/v1/users", usersRoute)
app.use("/api/v1/hotels", hotelsRoute)
app.use("/api/v1/rooms", roomsRoute)

app.use((error, req, res, next) => {
    const errStatus = error.status || 500
    const errMessage = error.message || "Something went wrong!"

    return res.status(errStatus).json({
        success: false,
        status: errStatus,
        message: errMessage
    })
})

app.listen(8800, () => {
    connect()
    console.log("Connected to backend!");
})