const express = require('express');
const router = express.Router();

const {getAllProducts, getProductsById, createProduct, modifyProductById, deleteProductById } = require('../controllers/productsControllers');
const {getAllCards, getCardsById, createCard, modifyCardById, deleteCardById } = require('../controllers/cardsControllers');
const {getAllLocations, getLocationsById, createLocation, modifyLocationById, deleteLocationById } = require('../controllers/locationsControllers');
const {getAllClients, getClientsById, createClient, modifyClientById, deleteClientById } = require('../controllers/clientsControllers');


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

router.route("/locations").get(getAllLocations);        //get all
router.route("/locations/:id").get(getLocationsById);    //get by id    
router.route("/locations").post(createLocation);       //create
router.route("/locations/:id").put(modifyLocationById);    //modifybyid
router.route("/locations/:id").delete(deleteLocationById); //delete

router.route("/clients").get(getAllClients);        //get all
router.route("/clients/:id").get(getClientsById);    //get by id    
router.route("/clients").post(createClient);       //create
router.route("/clients/:id").put(modifyClientById);    //modifybyid
router.route("/clients/:id").delete(deleteClientById); //delete



module.exports = router;