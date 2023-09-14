// models/Customer.js
const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: String,
  phone: String,
  // Add other customer properties as needed
});

module.exports = mongoose.model('Customer', customerSchema);
