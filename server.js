var cors = require('cors');
const express = require('express');
const app = express();
const PORT = 3001;
const connectDB = require('./config/databaseConnection')

connectDB()

app.use(cors({
    origin: "http://localhost:4200"
}));

app.use(express.json());


app.use('/api', require('./routes/products'));

const server = app.listen( PORT, () => {
    console.log(`App microservice listening on port ${PORT}`);
})

