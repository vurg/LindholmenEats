const mongoose = require('mongoose');

const promotionSchema = new mongoose.Schema({
    promotion_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    name: String,
    description: String,
    discount: Number,
    start_date: Date,
    end_date: Date,
})















module.exports = mongoose.model('Promotion', promotionSchema);