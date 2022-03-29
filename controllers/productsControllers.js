const Product = require('../models/Product');

exports.getAllProducts = async (req, res, next) => {
  //console.log('GET /Products Works!');
    const productList = await Product.find()
    .then((result) => {
        if (!result) {
        res.status(400).json({success: false, message: `NOT FOUND !`});
        } else {
        res.status(200).json({success: true, message: 'GET /Products Works!', data: result});
        }
    }).catch( err => {
        res.status(400).json({success: false, message: `${err}`});
    });
    } 


exports.getProductsById = async (req, res, next) => {
  console.log('GET /Products by Id Works!');
  
  const id = req.params.id;

    const productById = await Product.findById(id);

    if(productById) {
        res.status(200).json({success: true, message: 'GET /productss by Id Works!', data: productById});
    }
    else {
        res.status(400).json({success: false, message: `Product with id ${id} NOT FOUND !`});
    }
}

exports.getMultipleProducts = async (req, res, next) => {
  console.log('GET /MultipleProducts by Id Works!');
  
  console.log(req.body)
  const productList = await Product.find({name: {$in: req.body.productList}})
    .then((result) => {
        if (!result) {
        res.status(400).json({success: false, message: `NOT FOUND !`});
        } else {
        //console.log(result)

      
        res.status(200).json({success: true, message: 'GET /MultipleProducts Works!', data: result});
        }
    }).catch( err => {
        res.status(400).json({success: false, message: `${err}`});
    });
}


exports.createProduct = async (req, res, next) => {
    console.log('POST /products!!');

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

  
      const checkExistingProduct = await Product.findOne({ name: name})
  
      if (checkExistingProduct) {

        res.status(400).json({success: false, message: 'Product already exists!'});

      } else {

      var newProduct = new Product({
        name: name,
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
        inStock: inStock
      })
      console.log(newProduct)
      newProduct.save();
  
      res.status(200).json({success: true, message: 'Product added to database!'});

        
      }
  
}

exports.modifyProductById = async (req, res, next) => {
  console.log('PUT /Products by Id Works!');
 
      const id = req.params.id;

            const checkExistingProduct = await Product.findById(id);
    
            if (!checkExistingProduct) {
              res.status(400).json({success: false, message: `Product with id ${id} does not exist!`});
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

                const updatedProduct = await Product.findOneAndUpdate(
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

                if (updatedProduct) {
                res.status(200).json({success: true, message: 'Name, Value, Description Updated Succesfully!', data: updatedProduct});
                } else {
                  res.status(400).json({success: false, message: 'Name, Value, Description was not Updated !', data: updatedProduct});
                }
             
        }
      
    
  
}

//@describe DELETE /Products/:id -- Admin
exports.deleteProductById = async (req, res, next) => {
  console.log('DELETE /Products by Id Works!');
  
    const id = req.params.id;

    const deleteProduct = await Product.findByIdAndDelete(id);

    res.status(200).json({success: true, message: `Product with id ${id} deleted!`, data: deleteProduct});
        
    
  
}

