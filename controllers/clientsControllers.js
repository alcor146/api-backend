const Client = require('../models/Client');
const Cart = require('../models/Cart');
const Card = require('../models/Card');
const Location = require('../models/Location')
const Order = require('../models/Order');


exports.getAllClients = async (req, res, next) => {
  console.log('GET /Clients Works!');
    const clientList = await Client.find()
    .then((result) => {
        if (!result) {
        res.status(400).json({success: false, message: `NOT FOUND !`});
        } else {
        res.status(200).json({success: true, message: 'GET /Clients Works!', data: result});
        }
    }).catch( err => {
        res.status(400).json({success: false, message: `${err}`});
    });
    } 


exports.getClientsById = async (req, res, next) => {
  console.log('GET /Clients by Id Works!');
  
  const id = req.params.id;

    const clientById = await Client.findById(id);

    if(clientById) {
        res.status(200).json({success: true, message: 'GET /clientss by Id Works!', data: clientById});
    }
    else {
        res.status(400).json({success: false, message: `Client with id ${id} NOT FOUND !`});
    }

}

exports.getClientsByEmail = async (req, res, next) => {
  console.log('GET /Clients by Email Works!');
  
  const email = req.body.email;

    const clientByEmail = await Client.find({email: email});

    if(clientByEmail) {
        res.status(200).json({success: true, message: 'GET /clientss by email Works!', data: clientByEmail});
    }
    else {
        res.status(400).json({success: false, message: `Client with email ${id} NOT FOUND !`});
    }

}

exports.getClientsByCredentials = async (req, res, next) => {
  console.log('GET /Clients by Id Works!');
  
  const email = req.body.email;
  const password = req.body.password;

    const clientByCredentials = await Client.find({email: email, password: password});
    console.log(clientByCredentials)
    if(clientByCredentials.length == 0) {
      res.status(400).json({success: false, message: `Login failed, no such user`});
    } else {  
      res.status(200).json({success: true, message: 'GET /clientss by credentils Works!', data: clientByCredentials});
    }

}


exports.createClient = async (req, res, next) => {
    console.log('POST /clients!!');
      let role = req.body.role;
      const email = req.body.email;
      const name = req.body.name;
      const phoneNumber = req.body.phoneNumber;
      const password = req.body.password;

      if(role == undefined || role == ""){
        role = "basic"
      }
      
     
      const checkExistingClient = await Client.findOne({ email: email})
  
      if (checkExistingClient) {

        res.status(400).json({success: false, message: 'Client already exists!'});

      } else {

      var newClient = new Client({
        role: role,
        email: email,
        name: name,
        phoneNumber: phoneNumber,
        password: password,
      })
      console.log(newClient)
      await newClient.save();

      var newCart = new Cart({
        products: new Map(),
        createdBy: email,
      })
      console.log(newCart)
      await newCart.save();
  
      res.status(200).json({success: true, message: 'Client added to database!'});

        
      }
  
}

exports.modifyClientById = async (req, res, next) => {
  console.log('PUT /Clients by Id Works!');
 
      const id = req.params.id;

            const checkExistingClient = await Client.findById(id);
    
            if (!checkExistingClient) {
              res.status(400).json({success: false, message: `Client with id ${id} does not exist!`});
            } else {
                const role = req.body.role
                const email = req.body.email
                const name = req.body.name;
                const phoneNumber = req.body.phoneNumber;
                const password = req.body.password;

                const updatedClient = await Client.findOneAndUpdate(
                  { _id: id },
                  { 
                    role: role,
                    email: email,
                    name: name,
                    phoneNumber: phoneNumber,
                    password: password,},
                  { new: true }
                );

                if (updatedClient) {
                res.status(200).json({success: true, message: 'Client Updated Succesfully!', data: updatedClient});
                } else {
                  res.status(400).json({success: false, message: 'Client was not Updated !', data: updatedClient});
                }
             
        }
      
    
  
}

//@describe DELETE /Clients/:id -- Admin
exports.deleteClientById = async (req, res, next) => {
  console.log('DELETE /Clients by Id Works!');
  
    const id = req.params.id;
    const createdBy = req.headers.createdby
    console.log(req.headers)
    console.log(createdBy)
    if(createdBy != undefined){
      await Location.deleteMany({createdBy: createdBy})
      await Card.deleteMany({createdBy: createdBy})
      await Cart.deleteMany({createdBy: createdBy})
      await Order.deleteMany({createdBy: createdBy})
    }

    const deleteClient = await Client.findByIdAndDelete(id);
  
    res.status(200).json({success: true, message: `Client with id ${id} deleted!`, data: deleteClient});
}

