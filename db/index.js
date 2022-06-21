// This is the mongodb file

const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);


// Database Name
// assets for stocks/cypto
const dbName = 'assets';

// async function main() {
//   await client.connect();
//   console.log('Connected successfully to mongodb server');
//   const db = client.db(dbName);

//   const collection = db.collection('assets');

//   return collection;

//   // The following code examples can be pasted here
//   const insertResult = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);


//   // console.log('Inserted documents => ', insertResult);
//   // return 'done';
//   return collection;
// }

// const conn = main().then((res) => res)

module.exports = conn;
