const Customer = require('../models/Customer');
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')

// Create a new customer
  exports.createCustomer = async (req, res) => {
    try {
      const {name, email, password, phone, birthday, address, paymentMethods} = req.body
      

      const text = paymentMethods[0].type + ' ' + paymentMethods[0].bankCardNumber + ' ' + paymentMethods[0].expiry + ' ' + paymentMethods[0].cvc

      

      const user = {
        name: name,
        email: email,
        password: password,
        phone: phone,
        birthday: birthday,
        address: address,
        paymentMethods: [text]
      }
      const customer = new Customer(user);
      
      const savedCustomer = await customer.save();
      res.status(201).json(savedCustomer);
    } catch (err) {
      
      
      
      res.status(500).json({ error: err.message });
    }
  };

  exports.loginCustomer = async (req, res) => {
    try {
      
      const response = await Customer.findOne({email: req.body.email});

      if (response) {

      const customer = {
        name: response.name,
        email: response.email,
        password: response.password,
        phone: response.phone,
        birthday: response.birthday.toString(),
        address: response.address,
        paymentMethods: [response.paymentMethods[0]],
        favorites: response.favorites,
        loyaltyPoints: response.loyaltyPoints,
        _id: response._id.toString()
      };

      const token = jwt.sign(customer, process.env.KEY)

      res.cookie('user', token, {
        domain: 'localhost',
        path: '/'
      })
      
      res.status(200).json({message: response.name})

      } else {
        res.status(400).end()
      }
    } catch (error){
      res.status(500).end()
    }
  };
  
  // Get all customers
  exports.getAllCustomers = async (req, res) => {
    try {
      const customers = await Customer.find();
      res.json(customers);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  // Count number of customers
  exports.countCustomers = async (req, res) => {
    try {
      const customerCount = await Customer.countDocuments();
      res.json({ count: customerCount });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // Get a specific customer by ID
  exports.getCustomerById = async (req, res) => {
    try {
      const customer = await Customer.findById(req.params.id);
      if (!customer) {
        return res.status(404).json({ error: 'Customer not found' });
      }
      res.json(customer);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // Update a customer by ID using PUT
  exports.updateCustomerByIdPut = async (req, res) => {
    try {
      const customer = await Customer.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!customer) {
        return res.status(404).json({ error: 'Customer not found' });
      }
      res.json(customer);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // Update a customer by ID using PATCH
  exports.updateCustomerByIdPatch = async (req, res) => {
    try {
      const customer = await Customer.findByIdAndUpdate(
        req.params.id,
        { $set: req.body }, // Use $set to update only the specified fields
        { new: true }
      );
      if (!customer) {
        return res.status(404).json({ error: 'Customer not found' });
      }
      res.json(customer);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // Delete a customer by ID
  exports.deleteCustomerById = async (req, res) => {
    try {
      const customer = await Customer.findByIdAndRemove(req.params.id);
      if (!customer) {
        return res.status(404).json({ error: 'Customer not found' });
      }
      res.json({ message: 'Customer deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // Delete all customers
  exports.deleteAllCustomers = async (req, res) => {
    try {
      await Customer.deleteMany({});
      res.json({ message: 'All customers deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
