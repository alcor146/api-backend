const mongoose = require('mongoose');

const cardSchema = mongoose.Schema({
  createdBy: {
    type: String,
    default: "admin",
  },
  bank: {
    type: String,
    require: true,
  },
  cardName: {
    type: String,
    require: true,
  },
  cardNumber: {
    type: String,
    require: true,
  },
  expirationDate: {
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