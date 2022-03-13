const Order = require('../models/Order');

exports.getAllOrders = async (req, res, next) => {
  console.log('GET /Orders Works!');
    const orderList = await Order.find()
    .then((result) => {
        if (!result) {
        res.status(400).json({success: false, message: `NOT FOUND !`});
        } else {
          console.log(result)
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
        res.status(200).json({success: true, message: 'GET /orderss by Id Works!', data: result});
    }
    else {
        res.status(400).json({success: false, message: `Order with id ${id} NOT FOUND !`});
    }

}


exports.createOrder = async (req, res, next) => {
    console.log('POST /orders!!');

      const createdBy = req.body.createdBy;
      const products = req.body.products;
      const county = req.body.county;
      const town = req.body.town;
      const address = req.body.address;
  
      var newOrder = new Order({
        createdBy: createdBy,
        products: products,
        county: county,
        town: town,
        address: address,
      })
      console.log(newOrder)
      newOrder.save();
  
      res.status(200).json({success: true, message: 'Order added to database!'});

        
      
  
}

exports.modifyOrderById = async (req, res, next) => {
  console.log('PUT /Orders by Id Works!');
 
      const id = req.params.id;

            const checkExistingOrder = await Order.findById(id);
    
            if (!checkExistingOrder) {
              res.status(400).json({success: false, message: `Order with id ${id} does not exist!`});
            } else {

              const createdBy = req.body.createdBy;
              const products = req.body.products;
              const county = req.body.county;
              const town = req.body.town;
              const address = req.body.address;

                const updatedOrder = await Order.findOneAndUpdate(
                  { _id: id },
                  { createdBy: createdBy,
                    products: products,
                    county: county,
                    town: town,
                    address: address},
                  { new: true }
                );

                if (updatedOrder) {
                res.status(200).json({success: true, message: 'Name, Value, Description Updated Succesfully!', data: updatedOrder});
                } else {
                  res.status(400).json({success: false, message: 'Name, Value, Description was not Updated !', data: updatedOrder});
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

