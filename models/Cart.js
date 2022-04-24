const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
  products: {
    type: Map,
    default: {},
  },
  location: {
    type: {},
    default: {}
  },
  card: {
    type: {},
    default: {}
  },
  createdBy: {
    type: String,
    require: true
  }, 

},{ minimize: false })

const Cart = mongoose.model("Cart", cartSchema)

module.exports = Cart;