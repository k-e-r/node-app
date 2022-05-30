require('../src/db/mongoose');
const User = require('../src/models/user');

User.findByIdAndUpdate('62868145c771cab1afb6a90b', { age: 1 })
  .then((user) => {
    return User.countDocuments({ age: 1 });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
