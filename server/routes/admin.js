const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin');
const validateToken = require('../middleware/validateToken'); // Import the token validation middleware
const adminController = require('../controllers/admin');


router.post('/login', adminController.adminLogin);
router.post('/register', adminController.createAdmin);

// Apply the token validation middleware to routes where authentication is required
router.use(validateToken);
router.post('/validate', adminController.validateAdmin);

module.exports = router;