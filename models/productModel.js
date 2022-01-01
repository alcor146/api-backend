const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  OS: {
    type: String,
    required: true
  },
  internalMemory: {
    type: String,
    require: true
  }, 
  RAM: {
    type: String,
    require: true
  }, 
  processor: {
    type: String,
    require: true
  }, 
  SIM: {
    type: String,
    require: true
  }, 
  display: {
    type: String,
    require: true
  }, 
  displayResolution: {
    type: String,
    require: true
  }, 
  mainCamera: {
    type: String,
    require: true
  }, 
  frontalCamera: {
    type: String,
    require: true
  }, 
  battery: {
    type: String,
    require: true
  }, 
  price: {
    type: String,
    require: true
  }, 
})

const product = mongoose.model("Product", productSchema)

module.exports = product;