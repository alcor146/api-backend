const mongoose = require('mongoose');
const Product = require('../models/Product');
const {DATA, cardRecords, locationRecords, clientRecords, cartRecords}  = require('./databaseRecords')
const { async } = require('rxjs');
const Card = require('../models/Card');
const Location = require('../models/Location')
const Client = require('../models/Client')
const Order = require('../models/Order')
const Cart = require('../models/Cart');


async function populate() {
  for(let i=0; i<DATA.length; i++) {
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
        inStock: DATA[i].inStock,
      })
      newProduct.save()
    }
  }


  for(let i=0; i<cardRecords.length; i++) {
    var checkIfExists = await Card.findOne({bank: cardRecords[i].bank, createdBy: cardRecords[i].createdBy});
    if(checkIfExists == null) {
      var newCard = new Card({
        createdBy: cardRecords[i].createdBy,
        bank: cardRecords[i].bank,
        cardNumber: cardRecords[i].cardNumber,
        cardName: cardRecords[i].cardName,
        expirationDate: cardRecords[i].expirationDate,
        securityCode: cardRecords[i].securityCode,
      })
      newCard.save();
      console.log(newCard)
    }
  }

  for(let i=0; i<locationRecords.length; i++) {
    var checkIfExists = await Location.findOne({county: locationRecords[i].county, createdBy: locationRecords[i].createdBy});
    if(checkIfExists == null) {
      var newLocation = new Location({
        county: locationRecords[i].county,
        town: locationRecords[i].town,
        address: locationRecords[i].address,
        createdBy: locationRecords[i].createdBy
      })
      newLocation.save();
    }
  }

  for(let i=0; i<clientRecords.length; i++) {
    var checkIfExists = await Client.findOne({email: clientRecords[i].email});
    if(checkIfExists == null) {
      var newClient = new Client({
        role: clientRecords[i].role,
        email: clientRecords[i].email,
        name: clientRecords[i].name,
        phoneNumber: clientRecords[i].phoneNumber,
        password: clientRecords[i].password,
      })
      newClient.save();
    }
  }

  for(let i=0; i<cartRecords.length; i++) {
    var checkIfExists = await Cart.findOne({createdBy: cartRecords[i].createdBy});
    
    if(checkIfExists == null){
      var newCart = new Cart({
        createdBy: cartRecords[i].createdBy,
        products: cartRecords[i].products,
      })
      newCart.save();
    }

  
    
  }
}




const connectDB = async () => {
  var mongoString = "mongodb://username:password@mongo-mongodb.mongo.svc:27017/licenta"
  //var mongoString = "mongodb://username:password@localhost:27017/licenta"
  console.log('connection string:', mongoString);
  await mongoose.connect(mongoString, {
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

