
const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true],
    },
    price: {
        type: Number,
        required: [true],
    },
    country: {
        type: String,
        default: 'Indonesia',
        required: [true],
    },
    city: {
        type: String,
        required: [true],
    },
    isPopular: {
        type: Boolean,
        required: [false],
    },
    description: {
        type: String,
        required: [true],
    },
    imageId: [{
        type: ObjectId,
        ref: 'Image'
    }],
    featureId: [{
        type: ObjectId,
        ref: 'Feature'
    }],
    ActivityId: [{
        type: ObjectId,
        ref: 'Activity'
    }],
});

module.exports = mongoose.model('Item', itemSchema);