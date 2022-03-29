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


exports.getCartsByUser = async (req, res, next) => {
  console.log('GET /Carts by User Works!');
  
  const createdBy = req.body.createdBy;
  console.log(createdBy)

    const cartByUser = await Cart.findOne({ createdBy: createdBy});

    if(cartByUser) {
        res.status(200).json({success: true, message: 'GET /carts by Id Works!', data: cartByUser});
    }
    else {
        res.status(400).json({success: false, message: `Cart with id ${createdBy} NOT FOUND !`});
    }

}



exports.createCart = async (req, res, next) => {
    console.log('POST /carts!!');
     
    const createdBy = req.params.createdBy;

      const checkExistingCart = await Cart.findOne({ createdBy: createdBy});
  
      if (checkExistingCart) {

        res.status(400).json({success: false, message: 'Cart already exists!'});

      } else {
      var newCart = new Cart({
        products: new Map(), 
        createdBy: createdBy,
      })
      console.log(newCart)
      newCart.save();
  
      res.status(200).json({success: true, message: 'Cart added to database!'});
        
      }
}

exports.modifyCartById = async (req, res, next) => {
  console.log('PUT /Carts change item');
  const createdBy = req.params.id;
  console.log(req.body)
  const name = req.body.name;
  const value = req.body.value  

    const checkExistingCart = await Cart.findOne({ createdBy: createdBy});

    if (!checkExistingCart) {
        res.status(401).json({success: false, message: `Cart with id ${createdBy} does not exist!`});
    } else {
        if(value == null)
          checkExistingCart.products.delete(name)
        else
          checkExistingCart.products.set(req.body.name, req.body.value)

        const updatedCart = await Cart.findOneAndUpdate(
            { createdBy: createdBy},
            { 
            products: checkExistingCart.products,
            },
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
  
    const createdBy = req.params.createdBy;

    const deleteCart = await Cart.findByIdAndDelete(createdBy);

    res.status(200).json({success: true, message: `Cart with id ${createdBy} deleted!`, data: deleteCart});
        
}

