const mongoose = require('mongoose');

const locationSchema = mongoose.Schema({
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
  createdBy: {
    type: String,
    require: true,
  }
})

const Location = mongoose.model("Location", locationSchema)

module.exports = Location;