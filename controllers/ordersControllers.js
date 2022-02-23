const Order = require('../models/Order');

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
        res.status(200).json({success: true, message: 'GET /orderss by Id Works!', data: result});
    }
    else {
        res.status(400).json({success: false, message: `Order with id ${id} NOT FOUND !`});
    }

}


exports.createOrder = async (req, res, next) => {
    console.log('POST /orders!!');

      const username = req.body.username;
      const products = req.body.products;
  
      var newOrder = new Order({
        username: username,
        products: products,
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

                const name = req.body.name;
                const OS = req.body.OS;
                const internalMemory = req.body.internalMemory;
                const RAM = req.body.RAM;
                const processor = req.body.processor;
                const SIM = req.body.SIM;
                const SIMSlots = req.body.SIMSlots;
                const display = req.body.display;
                const displayResolution = req.body.displayResolution;
                const displayDimensions = req.body.displayDimensions;
                const dimensions = req.body.dimensions;
                const mainCamera = req.body.mainCamera;
                const frontalCamera = req.body.frontalCamera;
                const battery = req.body.battery;
                const price = req.body.price;
                const inStock = req.body.inStock;

                const updatedOrder = await Order.findOneAndUpdate(
                  { _id: id },
                  { name: name,
                    OS: OS,
                    internalMemory: internalMemory,
                    RAM: RAM,
                    processor: processor,
                    SIM: SIM,
                    SIMSlots: SIMSlots,
                    display: display,
                    displayResolution: displayResolution,
                    displayDimensions: displayDimensions,
                    dimensions: dimensions,
                    mainCamera: mainCamera,
                    frontalCamera: frontalCamera,
                    battery: battery,
                    price: price,
                    inStock: inStock },
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

