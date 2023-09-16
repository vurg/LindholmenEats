const mongoose = require('mongoose');

const promotionSchema = new mongoose.Schema({
    name: String,
    description: String,
    discount: Number,
    promotion_start_date: Date,
    promotion_end_date: Date,
    start_time: String,
    end_time: String,
    active_days: [String],
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products'
    }]
})

module.exports = mongoose.model('Promotion', promotionSchema);