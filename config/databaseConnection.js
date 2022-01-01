const mongoose = require('mongoose');
// const Order = require('../models/Order')
const DATA = require('./databaseRecords')
const Product = require('../models/Product')


const connectDB = async () => {
  console.log('connection string:', "mongodb://username:password@mongodb-service.mongo.svc.cluster.local:27017");
  await mongoose.connect("mongodb://localhost:27017/admin", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('conected to database');
  }, (error) => {
    console.log(`mongodb connection Error ${error}`);
  })
}

// var newOrder = new Order({
//   products: ["new", "item"],
//   status: "in progress"
// })
// newOrder.save();

for(let i=0; i<DATA.length; i++) {
  var newProduct = new Product({
    name: DATA[i].name,
    OS: DATA[i].OS,
    internalMemory: DATA[i].internalMemory,
    RAM: DATA[i].RAM,
    processor: DATA[i].processor,
    SIM: DATA[i].SIM,
    SIMSlots: DATA[i].SIMSlots,
    display: DATA[i].display,
    displayResolution: DATA[i].displayResolution,
    diplayDimensions: DATA[i].diplayDimensions,
    dimensions: DATA[i].dimensions,
    mainCamera: DATA[i].mainCamera,
    frontalCamera: DATA[i].frontalCamera,
    battery: DATA[i].battery,
    price: DATA[i].price,
    inStock: DATA[i].inStock
  })

  newProduct.save()
}





module.exports = connectDB;

