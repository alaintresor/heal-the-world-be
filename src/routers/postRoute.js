import express from "express";
import { commentingOnPost, createPost, getAllPosts, getSinglePost } from "../controllers/postController.js";
import protect from "../middleware/protectRoute.js"

const router = express.Router()

router.get('/', protect, getAllPosts)
router.get('/:postId', protect, getSinglePost)
router.post('/add', protect, createPost)
// ................comments ...................
router.post('/:postId/comment', protect, commentingOnPost)


export default router