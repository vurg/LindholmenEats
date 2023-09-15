const Transaction = require('../models/Transaction');

// Create a new transaction
exports.createTransaction = async (req, res) => {
  try {
    const transaction = new Transaction(req.body);
    const savedTransaction = await transaction.save();
    res.json(savedTransaction);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all transactions
exports.getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a specific transaction by ID
exports.getTransactionById = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    if (!transaction) {
      return res.status(404).json({ error: 'Transaction not found' });
    }
    res.json(transaction);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a transaction by ID using PUT
exports.updateTransactionByIdPut = async (req, res) => {
  try {
    const transaction = await Transaction.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!transaction) {
      return res.status(404).json({ error: 'Transaction not found' });
    }
    res.json(transaction);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a transaction by ID using PATCH
exports.updateTransactionByIdPatch = async (req, res) => {
  try {
    const transaction = await Transaction.findByIdAndUpdate(
      req.params.id,
      { $set: req.body }, // Use $set to update only the specified fields
      { new: true }
    );
    if (!transaction) {
      return res.status(404).json({ error: 'Transaction not found' });
    }
    res.json(transaction);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a transaction by ID
exports.deleteTransactionById = async (req, res) => {
  try {
    const transaction = await Transaction.findByIdAndRemove(req.params.id);
    if (!transaction) {
      return res.status(404).json({ error: 'Transaction not found' });
    }
    res.json({ message: 'Transaction deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add a product to a transaction
exports.addProductToTransaction = async (req, res) => {
    try {
      const transaction = await Transaction.findById(req.params.transaction_id);
      if (!transaction) {
        return res.status(404).json({ error: 'Transaction not found' });
      }
  
      // Create a new product object with the provided data and push it to the products array
      const newProduct = {
        product_id: req.body.product_id,
        quantity: req.body.quantity,
      };
  
      transaction.products.push(newProduct);
      await transaction.save();
  
      res.json(transaction);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // Get all products in a transaction
  exports.getProductsInTransaction = async (req, res) => {
    try {
      const transaction = await Transaction.findById(req.params.transaction_id);
      if (!transaction) {
        return res.status(404).json({ error: 'Transaction not found' });
      }
  
      res.json(transaction.products);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // Get a specific product in a transaction by product_id
  exports.getProductInTransaction = async (req, res) => {
    try {
      const transaction = await Transaction.findById(req.params.transaction_id);
      if (!transaction) {
        return res.status(404).json({ error: 'Transaction not found' });
      }
  
      const product = transaction.products.find((p) => p._id.toString() === req.params.product_id);
      if (!product) {
        return res.status(404).json({ error: 'Product not found in transaction' });
      }
  
      res.json(product);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // Remove a product from a transaction by product_id
  exports.removeProductFromTransaction = async (req, res) => {
    try {
      const transaction = await Transaction.findById(req.params.transaction_id);
      if (!transaction) {
        return res.status(404).json({ error: 'Transaction not found' });
      }
  
      const productIndex = transaction.products.findIndex((p) => p._id.toString() === req.params.product_id);
      if (productIndex === -1) {
        return res.status(404).json({ error: 'Product not found in transaction' });
      }
  
      // Remove the product from the products array
      transaction.products.splice(productIndex, 1);
      await transaction.save();
  
      res.json({ message: 'Product removed from transaction successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  