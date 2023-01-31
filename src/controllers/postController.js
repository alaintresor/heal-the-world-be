import Post from "../models/post.js"
import imageUploader from '../helpers/photoUpload.js';

export const createPost = async (req, res) => {
    try {

        const { user } = req
        const { content } = req.body
        if (!content || content == "")
            return res.status(200).json({ "success": false, message: "content is required" })

        let image = ''
        if (req.files) {
            image = await imageUploader(req)
            image = image.url
        }


        const post = new Post({
            user: user._id,
            content,
            image
        })
        const newPost = await post.save()
        res.status(201).json({
            "success": true,
            "post": {
                id: newPost._id,
                content,
                image: newPost.image,
                comments: newPost.comments,
                postedDate: newPost.postedDate
            }
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({ error })
    }
}

export const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find()
            .populate('user', '-password')
        res.status(200).json({
            "success": true,
            posts
        })

    } catch (error) {
        res.status(500).json({ "success": false, message: error })
    }
}
export const getSinglePost = async (req, res) => {
    try {
        const { postId } = req.params
        const post = await Post.findById(postId)
            .populate('user', '-password')
        res.status(200).json({
            "success": true,
            post
        })

    } catch (error) {
        res.status(500).json({ "success": false, message: error })
    }
}
export const deletePost = async (req, res) => {
    try {
        const { user } = req
        const { postId } = req.params
        const post = await Post.findById(postId)
        if (!post)
            return res.status(200).json({ "success": false, message: "post doesn't exist" })
        if (post.user !== user._id)
            return res.status(200).json({ "success": false, message: "this post doesn't belong to you" })

        await Post.deleteOne({ _id: postId })
        res.status(200).json({
            "success": true,
            message: "post deleted successful"
        })

    } catch (error) {
        res.status(500).json({ "success": false, message: error })
    }
}

export const commentingOnPost = async (req, res) => {
    try {
        const { postId } = req.params
        const { user } = req
        const { comment } = req.body
        if (!comment || comment == '')
            return res.status(200).json({ "success": false, message: "comment is required!" })

        const post = await Post.findById(postId)
        if (!post)
            return res.status(200).json({ "success": false, message: "Invalid post id" })

        const newComment = {
            user: user._id,
            comment,
            postedDate: new Date()
        }

        post.comments.push(newComment)
        await post.save()

        // const posts = await Post.findById(postId)
        //     .populate('user', '-password')
        res.status(200).json({
            "success": true,
            post
        })

    } catch (error) {
        res.status(500).json({ "success": false, message: error })
    }
}



