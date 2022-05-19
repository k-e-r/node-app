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

// const me = new User({
//   name: 'Andrew',
//   age: 27,
// });

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((error) => {
//     console.log('Error!', error);
//   });

const Task = mongoose.model('Task', {
  description: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
});

const task = new Task({
  description: 'Wash the dishes',
  completed: false,
});

task
  .save()
  .then(() => {
    console.log(task);
  })
  .catch((error) => {
    console.log('Error!', error);
  });
