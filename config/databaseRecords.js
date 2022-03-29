
var fs = require('fs');
var path = require('path');

console.log(path.join(__dirname + '/imagini/front.webp'))

const DATA = [
    {
        "name": "POCO X3 Pro",
        "OS": "Android",
        "internalMemory": "256 GB",
        "RAM": "8 GB",
        "processor": "octa-core",
        "SIM": "Nano SIM",
        "SIMSlots": "dual SIM",
        "display": "IPS",
        "displayResolution": "2400 x 1080",
        "displayDimensions": "6.5 inch",
        "dimensions": "75.8 x 8.9 x 164 mm",
        "mainCamera": "48 MP",
        "frontalCamera": "20 MP",
        "battery": "5160 mAh",
        "price": "1380",
        "inStock": "150",
    },
    {
        "name": "Samsung Galaxy A12",
        "OS": "Android",
        "internalMemory": "64 GB",
        "RAM": "4 GB",
        "processor": "octa-core",
        "SIM": "Nano SIM",
        "SIMSlots": "dual SIM",
        "display": "IPS",
        "displayResolution": "720 x 1600",
        "displayDimensions": "6.5 inch",
        "dimensions": "75.8 x 8.9 x 164 mm",
        "mainCamera": "48 MP",
        "frontalCamera": "8 MP",
        "battery": "5000 mAh",
        "price": "890",
        "inStock": "150",
    },
    {
        "name": "iPhone 13 Pro",
        "OS": "iOS",
        "internalMemory": "128 GB",
        "RAM": "4 GB",
        "processor": "hexa-core",
        "SIM": "Nano SIM",
        "SIMSlots": "Dual SIM",
        "display": "OLED",
        "displayResolution": "2532 x 1170",
        "displayDimensions": "6.1 inch",
        "dimensions": "71.5 x 146.7 x 7.65 mm",
        "mainCamera": "12 MP",
        "frontalCamera": "12 MP",
        "battery": "2406 mAh",
        "price": "5700",
        "inStock": "150",

    },
    {
        "name": "Samsung Galaxy A52s",
        "OS": "Android",
        "internalMemory": "128 GB",
        "RAM": "6 GB",
        "processor": "octa-core",
        "SIM": "Nano SIM",
        "SIMSlots": "Dual SIM",
        "display": "Super AMOLED",
        "displayResolution": "2400 x 1080",
        "displayDimensions": "6.5 inch",
        "dimensions": "75.1 x 159.9 x 8.4 mm",
        "mainCamera": "64 MP",
        "frontalCamera": "32 MP",
        "battery": "4500 mAh",
        "price": "1685",
        "inStock": "150",

    },
    {
        "name": "Samsung Galaxy A12",
        "OS": "Android",
        "internalMemory": "128 GB",
        "RAM": "4 GB",
        "processor": "octa-core",
        "SIM": "Nano SIM",
        "SIMSlots": "Dual SIM",
        "display": "IPS",
        "displayResolution": "720 x 1600",
        "displayDimensions": "6.5 inch",
        "dimensions": "75.8 x 8.9 x 164 mm",
        "mainCamera": "48 MP",
        "frontalCamera": "8 MP",
        "battery": "5000 mAh",
        "price": "875",
        "inStock": "150",

    },
    {
        "name": "iPhone 13",
        "OS": "iOS",
        "internalMemory": "128 GB",
        "RAM": "4 GB",
        "processor": "hexa-core",
        "SIM": "Nano SIM",
        "SIMSlots": "Dual SIM",
        "display": "OLED",
        "displayResolution": "2532 x 1170",
        "displayDimensions": "6.1 inch",
        "dimensions": "71.5 x 146.7 x 7.65 mm",
        "mainCamera": "12 MP",
        "frontalCamera": "12 MP",
        "battery": "2406 mAh",
        "price": "5169",
        "inStock": "150",

    },
    {
        "name": "Xiaomi Redmi Note 10S",
        "OS": "Android",
        "internalMemory": "128 GB",
        "RAM": "6 GB",
        "processor": "octa-core",
        "SIM": "Nano SIM",
        "SIMSlots": "Dual SIM",
        "display": "IPS",
        "displayResolution": "2400 x 1080",
        "displayDimensions": "6.5 inch",
        "dimensions": "74.5 x 160.5 x 8.3 mm",
        "mainCamera": "64 MP",
        "frontalCamera": "13 MP",
        "battery": "5000 mAh",
        "price": "1039",
        "inStock": "150",

    },
    {
        "name": "Xiaomi Redmi Note 9 Pro",
        "OS": "Android",
        "internalMemory": "128 GB",
        "RAM": "4 GB",
        "processor": "octa-core",
        "SIM": "Nano SIM",
        "SIMSlots": "Dual SIM",
        "display": "IPS",
        "displayResolution": "2400 x 1080",
        "displayDimensions": "6.67 inch",
        "dimensions": "76.68 x 165.75 x 8.8 mm",
        "mainCamera": "64 MP",
        "frontalCamera": "16 MP",
        "battery": "5020 mAh",
        "price": "1050",
        "inStock": "150",

    },
    {
        "name": "iPhone 12",
        "OS": "iOS",
        "internalMemory": "128 GB",
        "RAM": "4 GB",
        "processor": "hexa-core",
        "SIM": "Nano SIM",
        "SIMSlots": "Dual SIM",
        "display": "Super Retina XDR",
        "displayResolution": "2532 x 1170",
        "displayDimensions": "6.1 inch",
        "dimensions": "71.5 x 146.7 x 7.4 mm",
        "mainCamera": "12 MP",
        "frontalCamera": "12 MP",
        "battery": "2815 mAh",
        "price": "4150",
        "inStock": "150",

    },
    {
        "name": "Allview A20 Lite",
        "OS": "Android",
        "internalMemory": "32 GB",
        "RAM": "1 GB",
        "processor": "quad-core",
        "SIM": "Nano SIM",
        "SIMSlots": "Dual SIM",
        "display": "TFT",
        "displayResolution": "690 x 480",
        "displayDimensions": "5.7 inch",
        "dimensions": "75.3 x 155 x 10 mm",
        "mainCamera": "5MP",
        "frontalCamera": "2 MP",
        "battery": "2400 mAh",
        "price": "330",
        "inStock": "150",
    },
    {
        "name": "iHunt S21 Ultra",
        "OS": "Android",
        "internalMemory": "16 GB",
        "RAM": "2 GB",
        "processor": "quad-core",
        "SIM": "Nano SIM",
        "SIMSlots": "Dual SIM",
        "display": "IPS",
        "displayResolution": "1014 x 480",
        "displayDimensions": "6.3 inch",
        "dimensions": "161.2 x 9.5 x 76.6 mm",
        "mainCamera": "13 MP",
        "frontalCamera": "8 MP",
        "battery": "4000 mAh",
        "price": "395",
        "inStock": "150",
    },
]


const cardRecords = [
    {   
        createdBy: "admin",
        bank: "BCR",
        cardNumber: "3525355235",
        expirationMonth: "12",
        expirationYear: "1",
        securityCode: "132"

    },
    {   
        createdBy: "aurel",
        bank: "BRD",
        cardNumber: "345354",
        expirationMonth: "1",
        expirationYear: "1",
        securityCode: "432"

    },
    {   
        createdBy: "admin",
        bank: "BRD",
        cardNumber: "123",
        expirationMonth: "1123",
        expirationYear: "1123",
        securityCode: "1231"

    },
]

const locationRecords = [
    {   
        county: "Dambovita",
        town: "Targoviste",
        address: "Strada Aleea Manastirii, nr 15",
        createdBy: "admin"
    },
    {   
        county: "Bacau",
        town: "Onesti",
        address: "Strada Crizantemelor, nr 15",
        createdBy: "admin"
    },
    {   
        county: "Bacau",
        town: "Onesti",
        address: "Strada Crizantemelor, nr 15",
        createdBy: "aurel"
    },
]

const clientRecords = [
    {   
        email: "aurel@yahoo.com",
        name: "Ristoiu Aurel",
        phoneNumber: "63463463463463",
        password: "parola123"
    },
    {   
        email: "tudy@gmail.com",
        name: "Tudose Constantin",
        phoneNumber: "1231231231223",
        password: "parola123"
    },
]

const orderRecords = [
    
]

const cartRecords = [
    {
        createdBy: "admin",
        products:  new Map([['iPhone 12', "1"],['iHunt S21 Ultra', "1"]])
    },
]

module.exports = {
    DATA,
    orderRecords,
    cardRecords,
    locationRecords,
    clientRecords,
    cartRecords,
}

