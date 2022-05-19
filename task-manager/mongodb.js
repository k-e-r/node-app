require('dotenv').config();
// CRUD create read update delete

const { MongoClient, ObjectId } = require('mongodb');

const connectionURL = process.env.MONGO_URL;
const databaseName = 'task-manager';

const id = new ObjectId();
console.log(id.id.length);
console.log(id.toHexString().length);

MongoClient.connect(connectionURL, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database!');
  }

  const db = client.db(databaseName);

  // db.collection('users').insertOne(
  //   {
  //     name: 'Vikram',
  //     age: 26,
  //   },
  //   (error, result) => {
  //     if (error) {
  //       return console.log('Unable to insert user');
  //     }

  //     console.log(result);
  //   }
  // );

  // db.collection('users').insertMany(
  //   [
  //     {
  //       name: 'Jen',
  //       age: 28,
  //     },
  //     {
  //       name: 'Gunther',
  //       age: 27,
  //     },
  //   ],
  //   (error, result) => {
  //     if (error) {
  //       return console.log('Unable to insert documents!');
  //     }

  //     console.log(result);
  //   }
  // );

  // db.collection('tasks').insertMany(
  //   [
  //     {
  //       description: 'Buy milk',
  //       completed: false,
  //     },
  //     {
  //       description: 'Cook a meal',
  //       completed: false,
  //     },
  //     {
  //       description: 'Wash the dishes',
  //       completed: true,
  //     },
  //   ],
  //   (error, result) => {
  //     if (error) {
  //       return console.log('Unable to insert tasks!');
  //     }

  //     console.log(result);
  //   }
  // );
});
