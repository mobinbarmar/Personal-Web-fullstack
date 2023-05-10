const mongoose = require('mongoose');
const {
    Test
} = require('../models/model');

// Connection URI to MongoDB
const uri = 'mongodb://localhost:27023/test_db'

mongoose.set('strictQuery', false);


// Make db connection (asychronously)
mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then((result) => {
        console.log('Successful Connection!')
    }).catch((err) => console.log(err))


module.exports = Test