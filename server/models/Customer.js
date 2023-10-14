// models/Customer.js
const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  birthday: {
    type: Date,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  paymentMethods: [
    {
      bankCardType: String,
      bankCardNumber: String,
      expiry: String,
      cvc: String,
    },
  ],
  favorites: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
    },
  ],
  loyaltyPoints: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model('Customer', customerSchema);
