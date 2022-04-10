const mongoose = require('mongoose');

const clientSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password:{
    type: String,
    require: true,
  },
  phoneNumber: {
    type: String,
    require: true,
  },
  role: {
    type: String,
    default: 'basic',
    enum: ["basic", "supervisor", "admin"]
   }
})

const Client = mongoose.model("Client", clientSchema)

module.exports = Client;