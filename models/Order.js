const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  createdBy: {
    type: String,
    require: true,
  },
  products: {
    type: String,
    require: true,
  },
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
    require: true,
  },
  price: {
    type: String,
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