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

  // db.collection('users')
  //   .deleteMany({
  //     age: 27,
  //   })
  //   .then((result) => {
  //     console.log(result);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  db.collection('tasks')
    .deleteOne({
      description: 'Buy milk',
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
});
