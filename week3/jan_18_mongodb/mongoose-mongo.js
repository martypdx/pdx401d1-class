const mongoose = require( 'mongoose' );

mongoose.connect( 'mongodb://localhost/newdb' );

const db = mongoose.connection;

db.on( 'error', err => {
	console.log( 'db connect error!', err) 
	db.close();	
});

db.once( 'open', function() {
  // we're connected!
  
	var kittySchema = mongoose.Schema({
		name: { type: String, index: true },
		toys: Array
	});
	
	var Kitten = mongoose.model('Kitten', kittySchema);
	
	// var kitten = new Kitten({
	// 	name: 'flappy',
	// 	toys: [ 'laser' ]
	// });
	// kitten.save();
  
  	Kitten.find({}, (err, kittens) => {
		  console.log( kittens );
	});
});

