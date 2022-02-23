const mongoose = require('mongoose');

const clientSchema = mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  phoneNumber: {
    type: String,
    require: true,
  },
})

const Client = mongoose.model("Client", clientSchema)

module.exports = Client;