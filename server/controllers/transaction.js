const Transaction = require('../models/Transaction');

// Create a new transaction
exports.createTransaction = async (req, res) => {
  try {
    const transaction = new Transaction(req.body);
    const savedTransaction = await transaction.save();
    res.status(201).json(savedTransaction);
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
      { $set: req.body },
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
    const { product, quantity } = req.body; // Modified to use req.body.product

    if (!product) {
      return res.status(400).json({ error: 'Product ID is required' });
    }

    const transaction = await Transaction.findById(req.params.id);
    if (!transaction) {
      return res.status(404).json({ error: 'Transaction not found' });
    }

    // Check if the product already exists in the transaction
    const existingProduct = transaction.products.find(p => p.product.toString() === product);

    if (existingProduct) {
      // Increment the quantity for the existing product by 1
      existingProduct.quantity += 1;
    } else {
      // Product doesn't exist, create a new product entry with quantity 1
      const newProduct = {
        product: product,
        quantity: 1, // Increment quantity by 1
      };

      transaction.products.push(newProduct);
    }

    await transaction.save();

    res.json(transaction);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



// Get all products in a transaction
exports.getProductsInTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
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
    const transaction = await Transaction.findById(req.params.id);
    if (!transaction) {
      return res.status(404).json({ error: 'Transaction not found' });
    }

    // Find the product based on the provided product_id
    const product = transaction.products.find(
      (p) => p.product.toString() === req.params.product_id
    );

    if (!product) {
      return res.status(404).json({ error: 'Product not found in transaction' });
    }

    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Remove a product from a transaction by product_id and handle quantity
exports.removeProductFromTransaction = async (req, res) => {
  try {
    const { product_id } = req.params; // Modified to use req.params.product_id

    if (!product_id) {
      return res.status(400).json({ error: 'Product ID is required' });
    }

    const transaction = await Transaction.findById(req.params.id);
    if (!transaction) {
      return res.status(404).json({ error: 'Transaction not found' });
    }

    const productIndex = transaction.products.findIndex(p => p.product.toString() === product_id);
    if (productIndex === -1) {
      return res.status(404).json({ error: 'Product not found in transaction' });
    }

    const productItem = transaction.products[productIndex];

    // Check if quantity is greater than zero
    if (productItem.quantity > 0) {
      // Decrement the quantity by 1
      productItem.quantity -= 1;

      // If the quantity is zero, remove the product from the array
      if (productItem.quantity === 0) {
        transaction.products.splice(productIndex, 1);
      }
    } else {
      return res.status(400).json({ error: 'Product quantity is already zero' });
    }

    await transaction.save();

    res.json({ message: 'Product removed from transaction successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
