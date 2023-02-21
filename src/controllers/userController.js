import User from "../models/userModel.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import imageUploader from '../helpers/photoUpload.js';

export const registerUser = async (req, res) => {
    try {

        const { firstname, lastname, username, gender, phone, age, email, address, password, role, confirm_password } = req.body
        if (!firstname || firstname == "")
            return res.status(200).json({ "success": false, message: "firstname is required" })
        if (!lastname || lastname == "")
            return res.status(200).json({ "success": false, message: "lastname is required" })
        if (!username || username == "")
            return res.status(200).json({ "success": false, message: "username is required" })
        if (!gender || gender == "")
            return res.status(200).json({ "success": false, message: "gender is required" })
        if (!phone || phone == "")
            return res.status(200).json({ "success": false, message: "phone is required" })
        if (!age || age == "")
            return res.status(200).json({ "success": false, message: "age is required" })
        if (!email || email == "")
            return res.status(200).json({ "success": false, message: "email is required" })
        if (!address || address == "")
            return res.status(200).json({ "success": false, message: "address is required" })
        if (!password || password == "")
            return res.status(200).json({ "success": false, message: "password is required" })
        if (!role || role == "")
            return res.status(200).json({ "success": false, message: "role is required" })
        if (!confirm_password || confirm_password == "")
            return res.status(200).json({ "success": false, message: "confirm_password is required" })

        const userExist = await User.findOne({ email })
        if (userExist)
            res.status(200).json({ "success": false, message: "user email already exist" })
        else {
            if (password !== confirm_password)
                return res.status(200).json({ "success": false, message: "Two different password" })

            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password, salt)
            const user = new User({
                firstname, lastname, username, gender, age, email, address, phone, password: hashedPassword
                , role
            })
            const newUser = await user.save()
            res.status(201).json({
                "success": true,
                "token": generateToken(newUser._id),
                "user": {
                    id: newUser._id,
                    firstname,
                    lastname,
                    username,
                    gender,
                    age,
                    email,
                    address,
                    phone,
                    role,
                }
            })
        }
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ error })
    }
}

export const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        if (user && (await bcrypt.compare(password, user.password))) {
            res.json({
                "success": true,
                "token": generateToken(user._id),
                user: {
                    id: user._id,
                    username: user.username,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    gender: user.gender,
                    address: user.address,
                    email: user.email,
                    role: user.role,
                    phone: user.phone,
                    dob: user.dob,
                    profileImage: user.profileImage                   

                }
            })
        }
        else res.json({ "success": false, message: "Invalid credation" }).status(400)

    } catch (error) {
        res.status(500).json({ "success": false, message: error })
    }
}

export const getUserProfile = async (req, res) => {
    try {
        const user = req.user
        res.status(200).json({ "success": true, message: "user profile", data: user })
    } catch (error) {
        res.status(500).json({ "success": false, message: error })
        console.log(error);
    }
}

export const updateUserProfile = async (req, res) => {
    try {
        const user_id = req.user._id
        const { firstname, lastname, username, gender, address, email, phone, dob } = req.body

        if (!firstname || firstname == "")
            return res.status(200).json({ "success": false, message: "firstname is required" })
        if (!lastname || lastname == "")
            return res.status(200).json({ "success": false, message: "lastname is required" })
        if (!username || username == "")
            return res.status(200).json({ "success": false, message: "username is required" })
        if (!gender && gender == "")
            return res.status(200).json({ "success": false, message: "gender is required" })
        if (!address || address == "")
            return res.status(200).json({ "success": false, message: "address is required" })
        if (!email || email == "")
            return res.status(200).json({ "success": false, message: "email is required" })
        if (!phone || phone == "")
            return res.status(200).json({ "success": false, message: "phone is required" })
        if (!dob || dob == "")
            return res.status(200).json({ "success": false, message: "dob is required" })

        let image = ''
        if (req.files) {
            image = await imageUploader(req)
            image = image.url
        }

        const updateUser = await User.findByIdAndUpdate(user_id, {
            firstname,
            lastname,
            username,
            gender,
            dob,
            email,
            address,
            phone,
            profileImage: image
        }, { new: true })
        res.status(200).json({
            "success": true, message: "user updated successfully", data: {
                id: updateUser._id,
                firstname,
                lastname,
                username,
                gender,
                dob,
                email,
                address,
                phone,
                profileImage: image
            }
        })

    } catch (error) {
        res.status(500).json({ "success": false, message: error })
        console.log(error)
    }
}



// generate token 
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' })
}
