const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017/test';

const client = new MongoClient(url);

client.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log('Connected successfully to server');

    db.close();
});
