const mongoose = require("mongoose")
const { timestamps } = require('mongodb')

const noticeSchema = mongoose.Schema({
    topic: {
        type: String,
        require: true,
    },
    content: {
        type: String,
        require: true,
    },
    type: {
        type: String,
        require: true
    },
    file: {
        type: Buffer,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
}
);

module.exports = mongoose.model('Notice', noticeSchema)

