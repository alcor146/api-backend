const Cart = require('../models/Cart');

exports.getAllCarts = async (req, res, next) => {
  console.log('GET /Carts Works!');
    const cartList = await Cart.find()
    .then((result) => {
        if (!result) {
        res.status(400).json({success: false, message: `NOT FOUND !`});
        } else {
        res.status(200).json({success: true, message: 'GET /Carts Works!', data: result});
        }
    }).catch( err => {
        res.status(400).json({success: false, message: `${err}`});
    });
    } 


exports.getCartsById = async (req, res, next) => {
  console.log('GET /Carts by Id Works!');
  
  const id = req.params.id;

    const cartById = await Cart.findById(id);

    if(cartById) {
        res.status(200).json({success: true, message: 'GET /cartss by Id Works!', data: cartById});
    }
    else {
        res.status(400).json({success: false, message: `Cart with id ${id} NOT FOUND !`});
    }

}


exports.createCart = async (req, res, next) => {
    console.log('POST /carts!!');
      const role = req.body.role;
      const email = req.body.email;
      const name = req.body.name;
      const phoneNumber = req.body.phoneNumber;
      const password = req.body.password;

      if(role == undefined || role == ""){
        role = "basic"
      }
      
     
      const checkExistingCart = await Cart.findOne({ email: email})
  
      if (checkExistingCart) {

        res.status(400).json({success: false, message: 'Cart already exists!'});

      } else {

      var newCart = new Cart({
        role: role,
        email: email,
        name: name,
        phoneNumber: phoneNumber,
        password: password,
      })
      console.log(newCart)
      newCart.save();
  
      res.status(200).json({success: true, message: 'Cart added to database!'});

        
      }
  
}

exports.modifyCartById = async (req, res, next) => {
  console.log('PUT /Carts by Id Works!');
 
      const id = req.params.id;

            const checkExistingCart = await Cart.findById(id);
    
            if (!checkExistingCart) {
              res.status(400).json({success: false, message: `Cart with id ${id} does not exist!`});
            } else {
                const role = req.body.role
                const email = req.body.email
                const name = req.body.name;
                const phoneNumber = req.body.phoneNumber;
                const password = req.body.password;

                const updatedCart = await Cart.findOneAndUpdate(
                  { _id: id },
                  { 
                    role: role,
                    email: email,
                    name: name,
                    phoneNumber: phoneNumber,
                    password: password,},
                  { new: true }
                );

                if (updatedCart) {
                res.status(200).json({success: true, message: 'Cart Updated Succesfully!', data: updatedCart});
                } else {
                  res.status(400).json({success: false, message: 'Cart was not Updated !', data: updatedCart});
                }
             
        }
      
    
  
}

//@describe DELETE /Carts/:id -- Admin
exports.deleteCartById = async (req, res, next) => {
  console.log('DELETE /Carts by Id Works!');
  
    const id = req.params.id;

    const deleteCart = await Cart.findByIdAndDelete(id);

    res.status(200).json({success: true, message: `Cart with id ${id} deleted!`, data: deleteCart});
}

