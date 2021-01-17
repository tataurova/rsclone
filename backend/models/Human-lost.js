const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const humanLostSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    birthDay: {
        type: Date
    },
    age: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    dateLose: {
        type: Date,
        default: new Date()
    },
    dateFind: {
        type: Date,
        default: null
    },
    description: {
        type: String,
        required: true
    },
    clothes: {
        type: String,
        required: true
    },
    addDescription: {
        type: String
    },
    photo: {
        type: String
    },
    isActiveSearch: {
        type: Boolean,
        default:true
    },
    coordinator: {
        type: String,
        required: true
    }
});

const HumanLost = mongoose.model('HumanLost', humanLostSchema);

module.exports = HumanLost;