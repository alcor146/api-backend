const mongoose = require('mongoose');
const Order = require('../models/Order')
const Product = require('../models/Product');
const {DATA, orderRecords, cardRecords}  = require('./databaseRecords')
const { async } = require('rxjs');
const Card = require('../models/Card');


async function populate() {
  for(let i=0; i<DATA.length; i++) {
    console.log(DATA[i].displayDimensions)
    var checkIfExists = await Product.findOne({name: DATA[i].name});
    if(checkIfExists == null) {
      var newProduct = new Product({
        name: DATA[i].name,
        OS: DATA[i].OS,
        internalMemory: DATA[i].internalMemory,
        RAM: DATA[i].RAM,
        processor: DATA[i].processor,
        SIM: DATA[i].SIM,
        SIMSlots: DATA[i].SIMSlots,
        dimensions: DATA[i].dimensions,
        display: DATA[i].display,
        displayResolution: DATA[i].displayResolution,
        displayDimensions: DATA[i].displayDimensions,
        mainCamera: DATA[i].mainCamera,
        frontalCamera: DATA[i].frontalCamera,
        battery: DATA[i].battery,
        price: DATA[i].price,
        inStock: DATA[i].inStock
      })
      newProduct.save()
      console.log(newProduct)
    }
    else{
      //console.log(checkIfExists)
    }
  }

  // for(let i=0; i<orderRecords.length; i++) {
  //   var checkIfExists = await Order.findOne({bank: cardRecords[i].bank});
  //     var newOrder = new Order({
  //       products: orderRecords[i].products,
  //     })
  //     newOrder.save()
  //     //console.log(newOrder.products)
  // }

  for(let i=0; i<cardRecords.length; i++) {
    var checkIfExists = await Card.findOne({bank: cardRecords[i].bank});
    if(checkIfExists == null) {
      var newCard = new Card({
        username: cardRecords[i].username,
        bank: cardRecords[i].bank,
        cardNumber: cardRecords[i].cardNumber,
        expirationMonth: cardRecords[i].expirationMonth,
        expirationYear: cardRecords[i].expirationYear,
        securityCode: cardRecords[i].securityCode,
      })
      console.log(newCard)
      newCard.save();
    }
  
    //console.log(newOrder.products)
}
}




const connectDB = async () => {
  console.log('connection string:', "mongodb://username:password@mongodb-service.mongo.svc.cluster.local:27017");
  await mongoose.connect("mongodb://localhost:27017/admin", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('connected to database');
    populate();
  }, (error) => {
    console.log(`mongodb connection Error ${error}`);
  })
}







module.exports = connectDB;

