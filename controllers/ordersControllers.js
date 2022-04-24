const Order = require('../models/Order');
const Product = require('../models/Product');
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  port: 587,
  secure: false, // use SSL
  ignoreTLS: true, // add this 
  auth: {
    user: 'aurelrist@gmail.com',
    pass: 'kyxhqgtejegteqbn'
  }
});



exports.getAllOrders = async (req, res, next) => {
  console.log('GET /Orders Works!');
    const orderList = await Order.find()
    .then((result) => {
        if (!result) {
        res.status(400).json({success: false, message: `NOT FOUND !`});
        } else {
        res.status(200).json({success: true, message: 'GET /Orders Works!', data: result});
        }
    }).catch( err => {
        res.status(400).json({success: false, message: `${err}`});
    });
} 


exports.getOrdersById = async (req, res, next) => {
  console.log('GET /Orders by Id Works!');
  
  const id = req.params.id;

    const orderById = await Order.findById(id);

    if(orderById) {
        res.status(200).json({success: true, message: 'GET /orderss by Id Works!', data: orderById});
    }
    else {
        res.status(400).json({success: false, message: `Order with id ${id} NOT FOUND !`});
    }
}

exports.getOrdersByUser = async (req, res, next) => {
  console.log('GET /Orders by User Works!');
  
  const createdBy = req.body.createdBy;

    const orderByUser = await Order.find({createdBy: createdBy});

    if(orderByUser) {
        res.status(200).json({success: true, message: 'GET /orderss by Id Works!', data: orderByUser});
    }
    else {
        res.status(400).json({success: false, message: `Order with id ${id} NOT FOUND !`});
    }
}


exports.createOrder = async (req, res, next) => {
    console.log('POST /orders!!');

      const createdBy = req.body.createdBy;
      const products = req.body.products;
      const location = req.body.location;
      const card = req.body.card
      console.log(products)
     
  
      var newOrder = new Order({
        createdBy: createdBy,
        products: products,
        location: location,
        card: card
      })
      console.log(newOrder)
      newOrder.save();

      for(let product of products){
        console.log(product.name)
          
        const updatedProduct = await Product.findOneAndUpdate(
          {  name: product.name},
          { 
            inStock: product.inStock - product.count},
          { new: true }
        );

        console.log("this is after update  ", updatedProduct)

      }
  
      res.status(200).json({success: true, message: 'Order added to database!'});

}

exports.modifyOrderById = async (req, res, next) => {
  console.log('PUT /Orders is commented!');
 
      const id = req.params.id;
      const status = req.body.status
      const customerEmail = req.body.email

      const checkExistingOrder = await Order.findById(id);

      if (!checkExistingOrder) {
        res.status(400).json({success: false, message: `Order with id ${id} does not exist!`});
      } else {

          const updatedOrder = await Order.findOneAndUpdate(
            { _id: id },
            { status: status},
            { new: true }
          );


          var mailOptions = {
            from: 'aurelrist@gmail.com',
            to: customerEmail,
            subject: 'Order status updated',
            text: `The new status or the order is ${status}`
          };

          await transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });

          if (updatedOrder) {
          res.status(200).json({success: true, message: 'update1', data: updatedOrder});
          } else {
            res.status(400).json({success: false, message: 'update2', data: updatedOrder});
          }
        
  }
}

//@describe DELETE /Orders/:id -- Admin
exports.deleteOrderById = async (req, res, next) => {
  console.log('DELETE /Orders by Id Works!');
  
    const id = req.params.id;

    const deleteOrder = await Order.findByIdAndDelete(id);

    res.status(200).json({success: true, message: `Order with id ${id} deleted!`, data: deleteOrder});
}

