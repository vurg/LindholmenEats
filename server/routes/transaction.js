const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transaction');

// Create a new transaction
router.post('/', transactionController.createTransaction);

// Get all transactions
router.get('/', transactionController.getAllTransactions);

// Get a specific transaction by ID
router.get('/:id', transactionController.getTransactionById);

// Update a transaction by ID using PUT
router.put('/:id', transactionController.updateTransactionByIdPut);

// Update a transaction by ID using PATCH
router.patch('/:id', transactionController.updateTransactionByIdPatch);

// Delete a transaction by ID
router.delete('/:id', transactionController.deleteTransactionById);

// Add the new routes for managing products within a transaction
// (a) POST /transactions/:transaction_id/products
router.post('/:transaction_id/products', transactionController.addProductToTransaction);

// (b) GET /transactions/:transaction_id/products
router.get('/:transaction_id/products', transactionController.getProductsInTransaction);

// (c) GET /transactions/:transaction_id/products/:product_id
router.get('/:transaction_id/products/:product_id', transactionController.getProductInTransaction);

// (d) DELETE /transactions/:transaction_id/products/:product_id
router.delete('/:transaction_id/products/:product_id', transactionController.removeProductFromTransaction);

module.exports = router;
