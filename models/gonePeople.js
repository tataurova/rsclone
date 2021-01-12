const mongoose = require('mongoose')

const gonePeopleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    birthDay: {
        type: Date,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    dateOfLose: {
        type: String,
        required:true
    },
    description: {
        type: String,
        required: true
    },
    clothes: {
        type: String,
        required: true
    },
    withYourself: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('GonePeople', gonePeopleSchema);