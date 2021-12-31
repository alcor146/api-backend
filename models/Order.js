const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  products: {
    type: [String],
    require: true,
  },
  status: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

const Order = mongoose.model("Order", orderSchema)

module.exports = Order;