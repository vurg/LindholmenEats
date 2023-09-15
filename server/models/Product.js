// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  restaurants: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'restaurants'
  }]
});

module.exports = mongoose.model('Product', productSchema);
