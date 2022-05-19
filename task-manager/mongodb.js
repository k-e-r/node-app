require('dotenv').config();
// CRUD create read update delete

const { MongoClient, ObjectId } = require('mongodb');

const connectionURL = process.env.MONGO_URL;
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database!');
  }

  const db = client.db(databaseName);

  // db.collection('users').findOne(
  //   { _id: new ObjectId('62868145c771cab1afb6a90b') },
  //   (error, user) => {
  //     if (error) {
  //       return console.log('Unable to fetch');
  //     }

  //     console.log(user);
  //   }
  // );

  // db.collection('users')
  //   .find({ age: 27 })
  //   .toArray((error, users) => {
  //     console.log(users);
  //   });

  // db.collection('users')
  //   .countDocuments({ age: 27 })
  //   .then((count) => console.log(count))
  //   .catch((error) => console.log(error));

  db.collection('tasks').findOne(
    { _id: new ObjectId('628681ec698a6879a3894e06') },
    (error, user) => {
      if (error) {
        return console.log('Unable to fetch');
      }

      console.log(user);
    }
  );

  db.collection('tasks')
    .find({ completed: false })
    .toArray((error, tasks) => {
      if (error) {
        return console.log('Unable to fetch');
      }

      console.log(tasks);
    });
});
