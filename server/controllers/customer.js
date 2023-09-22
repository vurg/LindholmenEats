const Customer = require('../models/Customer');

// Create a new customer
exports.createCustomer = async (req, res) => {
    try {
      const customer = new Customer(req.body);
      const savedCustomer = await customer.save();
      res.status(201).json(savedCustomer);
    } catch (err) {
      res.status(500).json({ error: err.message });
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
