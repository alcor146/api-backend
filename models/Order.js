const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  createdBy: {
    type: String,
    require: true,
  },
  products: [],
  location: {},
  card: {},
  status: {
    type: String,
    require: true,
    default: "Plasata"
  },
  date: {
    type: Date,
    default: Date.now
  }
})

const Order = mongoose.model("Order", orderSchema)

module.exports = Order;