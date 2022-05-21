require('dotenv').config();
const mongoose = require('mongoose');
const connectionURL = process.env.MONGO_URL;

mongoose.connect(connectionURL);

const Task = mongoose.model('Task', {
  description: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});
