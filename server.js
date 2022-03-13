var cors = require('cors');
const express = require('express');
const app = express();
const PORT = 3001;
const connectDB = require('./config/databaseConnection')
const path = require('path')

connectDB()

app.use(cors({
    origin: "*"
}));

app.use(express.json());

app.use('/static', express.static(path.join(__dirname, 'config/imagini')))

app.use('/api', require('./routes/products'));

const server = app.listen( PORT, () => {
    console.log(`App microservice listening on port ${PORT}`);
})

