const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
  products: {
    type: Map,
    default: {},
  },
  createdBy: {
    type: String,
    require: true
  }
})

const Cart = mongoose.model("Cart", cartSchema)

module.exports = Cart;