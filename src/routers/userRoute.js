import express from "express";
import protect from "../middleware/protectRoute.js"
import { registerUser, userLogin, getUserProfile, updateUserProfile } from "../controllers/userController.js"

const router = express.Router()

router.post('/register', registerUser)
router.post('/login', userLogin)
router.get('/profile', protect, getUserProfile)
router.put('/profile', protect, updateUserProfile)

export default router