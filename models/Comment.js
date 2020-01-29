const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({

    body: {
        type: String,
        required: true
    },
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users"
        },
        username: {
            type: String
        }
    },
    date: {
        type: Date,
        default: Date.now
    },
    thumbs: {
        thumbs: {
            type: Number,
            default: 1
        },
        thumbersUp: [{
            type: String,
        }],
        thumbersDown: [{
            type: String,
        }]
    }
});

mongoose.model("comments", CommentSchema);