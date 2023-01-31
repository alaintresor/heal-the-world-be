import express from "express";
import userRouter from "./userRoute.js"
import postRouter from "./postRoute.js"

const router = express.Router()

router.use('/user', userRouter)
router.use('/post', postRouter)

export default router