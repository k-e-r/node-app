require('dotenv').config();
const mongoose = require('mongoose');
console.log(process.env.MONGO_URL);
const connectionURL = process.env.MONGO_URL;

mongoose.connect(connectionURL);
