
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
     
    const createdBy = req.body.createdBy;

      const checkExistingCart = await Cart.findOne({ createdBy: createdBy});
  
      if (checkExistingCart) {

        res.status(400).json({success: false, message: 'Cart already exists!'});

      } else {
      var newCart = new Cart({
        products: new Map(),
        createdBy: createdBy,
      })
      console.log(newCart)
      await newCart.save();
  
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
  
    const createdBy = req.params.id;

    const deleteCart = await Cart.deleteOne({createdBy: createdBy});

    res.status(200).json({success: true, message: `Cart with id ${createdBy} deleted!`, data: deleteCart});
        
}

exports.modifyCartUsername = async (req, res, next) => {
  
    const createdBy = req.params.id;
    const checkExistingCart = await Cart.findOne({ createdBy: createdBy});

    if (!checkExistingCart) {
        res.status(401).json({success: false, message: `Cart with id ${createdBy} does not exist!`});
    } else {
        
        const updatedCart = await Cart.findOneAndUpdate(
            { createdBy: createdBy},
            { 
              createdBy: createdBy,
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

exports.emptyCartById = async (req, res, next) => {
  console.log('Empty /Carts by Id Works!');
  
    const createdBy = req.body.createdBy;

    const checkExistingCart = await Cart.findOne({ createdBy: createdBy});
    if (!checkExistingCart) {
      res.status(401).json({success: false, message: `Cart with id ${createdBy} does not exist!`});
  } else {
    checkExistingCart.products.clear()
    const updatedCart = await Cart.findOneAndUpdate(
      { createdBy: createdBy},
      { 
      products: checkExistingCart.products,
      card: {},
      location: {}
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

exports.modifyCartDetails = async (req, res, next) => {
  console.log('PUT /Carts change item');
  const createdBy = req.params.id;
  const location = req.body.location;
  const card = req.body.card  

    const checkExistingCart = await Cart.findOne({ createdBy: createdBy});
  
    if (!checkExistingCart) {
      console.log("402")
        res.status(401).json({success: false, message: `Cart with id ${createdBy} does not exist!`});
    } else {
        if(location == null){
          const updatedCart = await Cart.findOneAndUpdate(
            { createdBy: createdBy},
            { 
            card: card
            },
            { new: true }
            
        );
        if (updatedCart) {
          console.log("201")
          res.status(200).json({success: true, message: 'Cart Updated Succesfully!', data: updatedCart});
        } else {
          console.log("401")
          res.status(400).json({success: false, message: 'Cart was not Updated !', data: updatedCart});
      }
        } else if(card == null){
          const updatedCart = await Cart.findOneAndUpdate(
            { createdBy: createdBy},
            { 
            location: location
            },
            { new: true }
        );
        if (updatedCart) {
          console.log("CART", updatedCart)
          res.status(200).json({success: true, message: 'Cart Updated Succesfully!', data: updatedCart});
        } else {
          console.log("400")
          res.status(400).json({success: false, message: 'Cart was not Updated !', data: updatedCart});
      }
        }
        

        
    }
}

