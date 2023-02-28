const mongoose = require('mongoose')
const { Schema } = mongoose

const markSchema = new Schema({
    student: {
        type: Schema.Types.ObjectId,
        ref: 'student'
    },
    subjectCode: {
        type: Schema.Types.ObjectId,
        ref: 'subject'
    },
    exam: {
        type: String,
        required: true
    },
    marks: {
        type: String,
        default: 0
    },
    totalMarks: {
        type: Number,
        default: 100 
    },
    department: {
        type: String
    },
    // semester: {
    //     type:Number
    // },
    section: {
        type: String
    }
})

module.exports = mongoose.model('mark', markSchema)
