const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const humanLookingRelativesSchema = new Schema({
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
    dateFind: {
        type: Date,
        default: new Date()
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
        default: true
    },
    coordinator: {
        type: String,
        required: true
    }
});

const HumanLookingRelatives = mongoose.model('HumanLookingRelatives', humanLookingRelativesSchema);

module.exports = HumanLookingRelatives;