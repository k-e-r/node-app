require('dotenv').config();
const mongoose = require('mongoose');
const connectionURL = process.env.MONGO_URL;

mongoose.connect(connectionURL);

const User = mongoose.model('User', {
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
});

const me = new User({
  name: 'Andrew',
  age: 27,
});

me.save()
  .then(() => {
    console.log(me);
  })
  .catch((error) => {
    console.log('Error!', error);
  });
