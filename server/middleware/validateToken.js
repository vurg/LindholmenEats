const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET_KEY;

const validateToken = (req, res, next) => {
  const authHeader = req.header('Authorization');
  console.log('header' + authHeader);

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  const token = authHeader.replace('Bearer ', ''); // Extract token without the Bearer keyword

  try {
    // Verify the token
    const decoded = jwt.verify(token, secretKey);
    console.log(decoded);

    // Add the decoded payload to the request object for further use if needed
    req.user = decoded;

    // Proceed to the next middleware
    next();
  } catch (err) {
    // Token verification failed
    return res.status(401).json({ message: 'Invalid token.' });
  }
};

module.exports = validateToken;
