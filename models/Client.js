const mongoose = require('mongoose');

const clientSchema = mongoose.Schema({
  password:{
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  email: {
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