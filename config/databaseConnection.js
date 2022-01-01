const mongoose = require('mongoose');
const Order = require('../models/Order')


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

var newOrder = new Order({
  products: ["new", "item"],
  status: "in progress"
})
newOrder.save();

module.exports = connectDB;

//mongodb-service.mongo.svc.cluster.local:27017