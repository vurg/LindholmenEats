// models/Delivery.js
const mongoose = require('mongoose');

const deliverySchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    customerName: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Delivery', deliverySchema);