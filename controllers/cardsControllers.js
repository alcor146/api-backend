const Card = require('../models/Card');

exports.getAllCards = async (req, res, next) => {
  console.log('GET /Cards Works!');
    const cardList = await Card.find()
    .then((result) => {
        if (!result) {
        res.status(400).json({success: false, message: `NOT FOUND !`});
        } else {
        res.status(200).json({success: true, message: 'GET /Cards Works!', data: result});
        }
    }).catch( err => {
        res.status(400).json({success: false, message: `${err}`});
    });
    } 


exports.getCardsById = async (req, res, next) => {
  console.log('GET /Cards by Id Works!');
  
  const id = req.params.id;

    const cardById = await Card.findById(id);

    if(cardById) {
        res.status(200).json({success: true, message: 'GET /cardss by Id Works!', data: result});
    }
    else {
        res.status(400).json({success: false, message: `Card with id ${id} NOT FOUND !`});
    }

}

exports.getCardsByUser = async (req, res, next) => {
  console.log('GET /Cards by User Works!');
  const createdBy = req.body.createdBy;

    const cardByUser = await Card.find({createdBy: createdBy});

    if(cardByUser) {
        res.status(200).json({success: true, message: 'GET /cardss by Id Works!', data: cardByUser});
    }
    else {
        res.status(400).json({success: false, message: `Card with id ${createdBy} NOT FOUND !`});
    }

}


exports.createCard = async (req, res, next) => {
    console.log('POST /cards!!');
      const createdBy = req.body.createdBy;
      const bank = req.body.bank;
      const cardNumber = req.body.cardNumber;
      const cardName = req.body.cardName;
      const expirationDate = req.body.expirationDate;
      const securityCode = req.body.securityCode;
      console.log(createdBy)
      const checkExistingCard = await Card.findOne({ cardNumber: cardNumber, createdBy: createdBy})
  
      if (checkExistingCard) {

        res.status(400).json({success: false, message: 'Card already exists!'});

      } else {

      var newCard = new Card({
        createdBy: createdBy,
        bank: bank,
        cardNumber: cardNumber,
        cardName: cardName,
        expirationDate: expirationDate,

        securityCode: securityCode,
      })
      console.log(newCard)
      await newCard.save();
  
      res.status(200).json({success: true, message: 'Card added to database!'});

        
      }
  
}

exports.modifyCardById = async (req, res, next) => {
  console.log('PUT /Cards by Id Works!');
 
      const id = req.params.id;

            const checkExistingCard = await Card.findById(id);
    
            if (!checkExistingCard) {
              res.status(400).json({success: false, message: `Card with id ${id} does not exist!`});
            } else {

                const bank = req.body.bank
                const cardNumber = req.body.cardNumber;
                const cardName = req.body.cardName;
                const expirationDate = req.body.expirationDate;
      
                const securityCode = req.body.securityCode;

                const updatedCard = await Card.findOneAndUpdate(
                  { _id: id },
                  { 
                    bank: bank,
                    cardNumber: cardNumber,
                    cardName: cardName,
                    expirationDate: expirationDate,
                
                    securityCode: securityCode, },
                  { new: true }
                );

                if (updatedCard) {
                res.status(200).json({success: true, message: 'Card Updated Succesfully!', data: updatedCard});
                } else {
                  res.status(400).json({success: false, message: 'Card was not Updated !', data: updatedCard});
                }
             
        }
      
    
  
}

//@describe DELETE /Cards/:id -- Admin
exports.deleteCardById = async (req, res, next) => {
  console.log('DELETE /Cards by Id Works!');
  
    const id = req.params.id;

    const deleteCard = await Card.findByIdAndDelete(id);

    res.status(200).json({success: true, message: `Card with id ${id} deleted!`, data: deleteCard});
}

