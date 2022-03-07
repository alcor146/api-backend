const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  products: {
    type: [],
    require: true,
  },
  status: {
    type: String,
    default: "Comanda plasata"
  },
  date: {
    type: Date,
    default: Date.now
  }
})

const Order = mongoose.model("Order", orderSchema)

module.exports = Order;