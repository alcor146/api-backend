const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  createdBy: {
    type: String,
    require: true,
  },
  products: [],
  location: {},
  card: {},
  date: {
    type: Date,
    default: Date.now
  }
})

const Order = mongoose.model("Order", orderSchema)

module.exports = Order;