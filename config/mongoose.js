const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/issue_tarcker_coding-ninja');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function () {
    console.log('Connected to Database :: MongoDB');
});


module.exports = db;
