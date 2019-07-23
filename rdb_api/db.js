const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/rdb_api')

const customerSchema = new mongoose.Schema({
  name: String,
  email: String
}, { collection: 'customers' }
)

module.exports = { Mongoose: mongoose, CustomerSchema: customerSchema }
