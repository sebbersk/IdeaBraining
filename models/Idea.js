const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const IdeaSchema = new Schema({

    topic: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
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
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "comments"
    }],
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

mongoose.model("ideas", IdeaSchema);