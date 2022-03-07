const Client = require('../models/Client');

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
        res.status(200).json({success: true, message: 'GET /clientss by Id Works!', data: result});
    }
    else {
        res.status(400).json({success: false, message: `Client with id ${id} NOT FOUND !`});
    }

}


exports.createClient = async (req, res, next) => {
    console.log('POST /clients!!');

      const email = req.body.email;
      const name = req.body.name;
      const phoneNumber = req.body.phoneNumber;
      const password = req.body.password;
      
     

  
      const checkExistingClient = await Client.findOne({ name: name})
  
      if (checkExistingClient) {

        res.status(400).json({success: false, message: 'Client already exists!'});

      } else {

      var newClient = new Client({
        email: email,
        name: name,
        phoneNumber: phoneNumber,
        password: password,
      })
      console.log(newClient)
      newClient.save();
  
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

                const email = req.body.email
                const name = req.body.name;
                const phoneNumber = req.body.phoneNumber;
                const password = req.body.password;

                const updatedClient = await Client.findOneAndUpdate(
                  { _id: id },
                  { 
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

    const deleteClient = await Client.findByIdAndDelete(id);

    res.status(200).json({success: true, message: `Client with id ${id} deleted!`, data: deleteClient});
}

