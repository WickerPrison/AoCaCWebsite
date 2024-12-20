const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.MY_SECRET;
const expiration = '2h';

module.exports = {
  authMiddleware: function (req, res, next) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    next();
  },
  signToken: function ({ email, username, _id, isAdmin = false }) {
    const payload = { email, username, _id, isAdmin };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
