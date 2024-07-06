require('dotenv').config();
const { connect, connection } = require('mongoose');

connect(process.env.DATABASE_URL);

module.exports = connection;