const mongoose = require('mongoose');

const cardSchema = mongoose.Schema({
  username: {
    type: String,
    default: "admin",
  },
  bank: {
    type: String,
    require: true,
  },
  cardNumber: {
    type: String,
    require: true,
  },
  expirationMonth: {
    type: String,
    require: true,
  },
  expirationYear: {
    type: String,
    require: true,
  },
  securityCode: {
    type: String,
    require: true,
  },
})

const Card = mongoose.model("Card", cardSchema)

module.exports = Card;