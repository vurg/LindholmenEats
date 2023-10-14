const Admin = require('../models/Admin');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const secretKey = process.env.JWT_SECRET_KEY || '50be7b333b5bee0acc5572ab2b8fe2ac119ff96e8c3fd5464e72d96b04937358';

exports.adminLogin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const admin = await Admin.findOne({ username });

    if (!admin || !bcrypt.compareSync(password, admin.password)) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: admin._id }, secretKey, {
      expiresIn: '1h',
    });
    console.log(token);

    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.createAdmin = async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);

  try {
    const existingAdmin = await Admin.findOne({ username });
    if (existingAdmin) {
      return res.status(400).json({ message: 'Admin already exists with this username.' });
    }

    const newAdmin = new Admin({ username, password });
    await newAdmin.save();
    res.status(201).json({ message: 'Admin account created successfully.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.validateAdmin = async (req, res) => {
  try {
    // The token has already been validated by the middleware.
    // If the execution reaches this point, the token is valid.
    res.status(200).json({ message: 'Token is valid.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};