import mongoose from "mongoose"

const schema = mongoose.Schema({
    firstname: {
        type: String,
        required: [true, 'Please add a firstname'],
    },
    lastname: {
        type: String,
        required: [true, 'Please add a lastname'],
    },
    username: {
        type: String,
        required: [true, 'Please add a name'],
    },
    gender: {
        type: String,
        required: [true, 'Please add a gender'],
    },
    age: {
        type: String,
    },
    address: {
        type: String,
    },
    email: {
        type: String,
        required: [true, 'Please add a email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please add a password'],
    },
    role: {
        type: String,
        required: [true, 'Please add a rorle'],
    },
})

export default mongoose.model('User', schema)