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
  
  const createdBy = req.params.id;
  console.log(createdBy)

    const cartById = await Cart.findOne({ createdBy: createdBy});

    if(cartById) {
        res.status(200).json({success: true, message: 'GET /carts by Id Works!', data: cartById});
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

    const checkExistingCart = await await Cart.findOne({ createdBy: createdBy});

    if (!checkExistingCart) {
        res.status(400).json({success: false, message: `Cart with id ${createdBy} does not exist!`});
    } else {
        
        
        checkExistingCart.products.set(req.body.name, req.body.value)
        console.log(checkExistingCart.products)

        
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
