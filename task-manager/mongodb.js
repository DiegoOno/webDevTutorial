// CRUD (Create Read Update Delete)

const { MongoClient, ObjectID } = require('mongodb');

const database = 'task-manager';

const id = new ObjectID();

MongoClient.connect(process.env.MONGODB_URL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database!');
  }

  const db = client.db(database);

  db.collection('tasks').deleteOne({ description: 'Clean the room' })
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
});