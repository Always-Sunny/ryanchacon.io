import MongoClient from 'mongodb';
import assert from 'assert';


//for when we need to use Mongo
//examples


// Connection URL
const url = 'mongodb://localhost:27017/myproject';

MongoClient.connect(url, (err, db) => {
  assert.equal(null, err);
  console.log("Connected successfully to mongo");


  insertDocuments(db, function() {
    findDocuments(db, function() {
      db.close();
    });
  });
});

var insertDocuments = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Insert some documents
  collection.insertMany([
    {a : 1}, {a : 2}, {a : 3}
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
}

var findDocuments = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
    callback(docs);
  });
}
