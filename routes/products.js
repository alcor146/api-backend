const express = require('express');
const router = express.Router();

const {getAllProducts, getProductsById, createProduct, modifyProductById, deleteProductById, getMultipleProducts } = require('../controllers/productsControllers');
const {getAllCards, getCardsById, getCardsByUser, createCard, modifyCardById, deleteCardById } = require('../controllers/cardsControllers');
const {getAllLocations, getLocationsById, getLocationsByUser, createLocation, modifyLocationById, deleteLocationById } = require('../controllers/locationsControllers');
const {getAllClients, getClientsById, createClient, modifyClientById, deleteClientById, getClientsByEmail, getClientsByCredentials } = require('../controllers/clientsControllers');
const {getAllOrders, getOrdersById, createOrder, modifyOrderById, deleteOrderById, getOrdersByUser } = require('../controllers/ordersControllers');
const {getAllCarts, getCartsByUser, createCart, modifyCartById, deleteCartById, emptyCartById, modifyCartDetails, modifyCartUsername} = require('../controllers/cartsControllers');



router.route("/products").get(getAllProducts);        //get all
router.route("/products/:id").get(getProductsById);    //get by id    
router.route("/products").post(createProduct);       //create
router.route("/products/cart").post(getMultipleProducts);        //get all for cart
router.route("/products/:id").put(modifyProductById);    //modifybyid
router.route("/products/:id").delete(deleteProductById); //delete

router.route("/cards").get(getAllCards);        //get all
router.route("/cards/:id").get(getCardsById);    //get by id  
router.route("/cards/user").post(getCardsByUser);    //get by user  
router.route("/cards").post(createCard);       //create
router.route("/cards/:id").put(modifyCardById);    //modifybyid
router.route("/cards/:id").delete(deleteCardById); //delete

router.route("/locations").get(getAllLocations);        //get all
router.route("/locations/:id").get(getLocationsById);    //get by id    
router.route("/locations/user").post(getLocationsByUser);    //get by user
router.route("/locations").post(createLocation);       //create
router.route("/locations/:id").put(modifyLocationById);    //modifybyid
router.route("/locations/:id").delete(deleteLocationById); //delete

router.route("/clients").get(getAllClients);        //get all
router.route("/clients/:id").get(getClientsById);    //get by id    
router.route("/clients").post(createClient);       //create
router.route("/clients/user").post(getClientsByEmail);       //create
router.route("/clients/:id").put(modifyClientById);    //modifybyid
router.route("/clients/:id").delete(deleteClientById); //delete
router.route("/clients/login/user").post(getClientsByCredentials);   

router.route("/orders").get(getAllOrders);        //get all
router.route("/orders/:id").get(getOrdersById);    //get by id    
router.route("/orders").post(createOrder);       //create
router.route("/orders/user").post(getOrdersByUser);    //get by user   
router.route("/orders/:id").put(modifyOrderById);    //modifybyid
router.route("/orders/:id").delete(deleteOrderById); //delete

router.route("/carts").get(getAllCarts);        //get all  
router.route("/carts").post(createCart);       //create
router.route("/carts/user").post(getCartsByUser); 
router.route("/carts/:id").put(modifyCartById);    //modifybyid
router.route("/carts/changeDetails/:id").put(modifyCartDetails);    //modifyDetails
router.route("/carts/:id").delete(deleteCartById); //delete
router.route("/carts/emptyCart").post(emptyCartById);  

router.route("/admincarts").get(getAllCards);        //get all
router.route("/admincarts/:id").get(getCardsById);    //get by id  
router.route("/admincarts").post(createCard);       //create
router.route("/admincarts/:id").put(modifyCardById);    //modifybyid
router.route("/admincarts/:id").delete(deleteCardById); //delete




module.exports = router;