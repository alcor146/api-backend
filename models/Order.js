const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  createdBy: {
    type: String,
    require: true,
  },
  products: Map,
  location: {
    county: {
      type: String,
      require: true,
    },
    town: {
      type: String,
      require: true,
    },
    address: {
      type: String,
      require: true
    },
  },
  price: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now
  }
})

const Order = mongoose.model("Order", orderSchema)

module.exports = Order;