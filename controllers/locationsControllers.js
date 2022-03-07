const Location = require('../models/Location');

exports.getAllLocations = async (req, res, next) => {
  console.log('GET /Locations Works!');
    const locationList = await Location.find()
    .then((result) => {
        if (!result) {
        res.status(400).json({success: false, message: `NOT FOUND !`});
        } else {
        res.status(200).json({success: true, message: 'GET /Locations Works!', data: result});
        }
    }).catch( err => {
        res.status(400).json({success: false, message: `${err}`});
    });
    } 


exports.getLocationsById = async (req, res, next) => {
  console.log('GET /Locations by Id Works!');
  
  const id = req.params.id;

    const locationById = await Location.findById(id);

    if(locationById) {
        res.status(200).json({success: true, message: 'GET /locationss by Id Works!', data: result});
    }
    else {
        res.status(400).json({success: false, message: `Location with id ${id} NOT FOUND !`});
    }

}


exports.createLocation = async (req, res, next) => {
    console.log('POST /locations!!');

      const county = req.body.county;
      const town = req.body.town;
      const address = req.body.address;
      
     

  
      const checkExistingLocation = await Location.findOne({ town: town})
  
      if (checkExistingLocation) {

        res.status(400).json({success: false, message: 'Location already exists!'});

      } else {

      var newLocation = new Location({
        county: county,
        town: town,
        address: address,
      })
      console.log(newLocation)
      newLocation.save();
  
      res.status(200).json({success: true, message: 'Location added to database!'});

        
      }
  
}

exports.modifyLocationById = async (req, res, next) => {
  console.log('PUT /Locations by Id Works!');
 
      const id = req.params.id;

            const checkExistingLocation = await Location.findById(id);
    
            if (!checkExistingLocation) {
              res.status(400).json({success: false, message: `Location with id ${id} does not exist!`});
            } else {

                const county = req.body.county
                const town = req.body.town;
                const address = req.body.address;

                const updatedLocation = await Location.findOneAndUpdate(
                  { _id: id },
                  { 
                    county: county,
                    town: town,
                    address: address},
                  { new: true }
                );

                if (updatedLocation) {
                res.status(200).json({success: true, message: 'Location Updated Succesfully!', data: updatedLocation});
                } else {
                  res.status(400).json({success: false, message: 'Location was not Updated !', data: updatedLocation});
                }
             
        }
      
    
  
}

//@describe DELETE /Locations/:id -- Admin
exports.deleteLocationById = async (req, res, next) => {
  console.log('DELETE /Locations by Id Works!');
  
    const id = req.params.id;

    const deleteLocation = await Location.findByIdAndDelete(id);

    res.status(200).json({success: true, message: `Location with id ${id} deleted!`, data: deleteLocation});
}

