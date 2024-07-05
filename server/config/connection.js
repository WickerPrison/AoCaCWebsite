const { connect, connection } = require('mongoose');

connect('mongodb://127.0.0.1:27017/AoCaCDB');

module.exports = connection;