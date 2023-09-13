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
    validate: {
      validator: (email) => validator.isEmail(email),
      message: 'Invalid email address format',
    },
    set: (email) => email.toLowerCase(),
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  birthday: {
    type: Date,
    required: true,
    validate: {
      validator: (birthday) => {
        const currentDate = new Date();
        return birthday <= currentDate;
      },
      message: 'Invalid date of birth',
    },
  },
  address: {
    type: String,
    required: true,
  },
  paymentMethods: [
    {
      type: String,
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
