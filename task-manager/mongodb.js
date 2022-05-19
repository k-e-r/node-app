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
  //   .updateOne(
  //     {
  //       _id: new ObjectId('62868145c771cab1afb6a90b'),
  //     },
  //     {
  //       $inc: {
  //         age: 1,
  //       },
  //     }
  //   )
  //   .then((result) => {
  //     console.log(result);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  db.collection('tasks')
    .updateMany(
      {
        completed: false,
      },
      {
        $set: {
          completed: true,
        },
      }
    )
    .then((result) => {
      console.log(result.modifiedCount);
    })
    .catch((error) => {
      console.log(error);
    });
});
