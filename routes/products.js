const express = require('express');
const router = express.Router();

const {getAllProducts, getProductsById, createProduct, modifyProductById, deleteProductById } = require('../controllers/productsControllers');
const {getAllCards, getCardsById, createCard, modifyCardById, deleteCardById } = require('../controllers/cardsControllers');

router.route("/products").get(getAllProducts);        //get all
router.route("/products/:id").get(getProductsById);    //get by id    
router.route("/products").post(createProduct);       //create
router.route("/products/:id").put(modifyProductById);    //modifybyid
router.route("/products/:id").delete(deleteProductById); //delete

router.route("/cards").get(getAllCards);        //get all
router.route("/cards/:id").get(getCardsById);    //get by id    
router.route("/cards").post(createCard);       //create
router.route("/cards/:id").put(modifyCardById);    //modifybyid
router.route("/cards/:id").delete(deleteCardById); //delete



module.exports = router;