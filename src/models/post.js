import mongoose from "mongoose"

const schema = mongoose.Schema({
    userId: {
        type: String,
        required: [true, 'Please add a firstname'],
    },
    content: {
        type: String,
        required: [true, 'Please add a lastname'],
    },
    image: {
        type: String,
        required: [true, 'Please add a name'],
    },
    postedDate: {
        type: String,
        required: true,
        default: new Date()
    },
    comments: [{
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
        username: {
            type: String,
            required: true
        },
        comment: {
            type: String,
            required: [true, 'Please add a comment'],
        },
        postedDate: {
            type: String,
            required: true,
            default: new Date()
        }
    }
    ],
   
})

export default mongoose.model('Post', schema)