 var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var url = 'mongodb://localhost/newdb';
MongoClient.connect(url, function(err, db) {
	
  assert.equal(null, err);
  console.log("Connected correctly to server.");
  
  var foo = db.collection('foo');
  
//   foo.insert({ name: 'betty', retired: false }, function(err, doc){
	  
// 	assert.equal( null, err );
// 	console.log( 'inserted', doc );
	  
// 	db.collection('foo').find({}).toArray(function(err, docs) {
// 		console.dir(docs);
// 		db.close();
// 	});
//   });
  
  	foo.find({ retired: false }).toArray(function(err, docs) {
		console.dir(docs);
		db.close();
	});
  
});
