const mongoose = require( 'mongoose' );
const Pet = require( './models/Pet' );
const Store = require( './models/Store' );

const Parent = require( './models/Parent' );

mongoose.connect( 'mongodb://localhost/pets' );
const db = mongoose.connection;
db.on( 'error', err => {
	console.log( 'db connect error!', err) 
	db.close();	
});

function close(){
	if( db ) { db.close(); }
}

db.once( 'open', function() {
	
	// const downtown = new Store({ name: 'Downtown Pet Mart', location: 'downtown' });
	
	// downtown.save().then( store => {
		
	// 	const kitty = new Pet({ type: 'cat', name: 'kitty', store: store.id });
		
	// 	kitty.save().then( pet => {
	// 		store.pets.push( pet.id );
	// 		store.save().then( close );
	// 	});
	// });
	
	// Pet.find({}).populate( 'store' ).then( pet => {
	// 	console.log( pet );
	// 	close();
	// });
	
	// Store.find().lean().populate( 'pets', 'name' ).then( store => {
	// 	console.log( store );
	// 	close();
	// });
	
	const dad = new Parent({
		name: 'Dad',
		children: [ { name: 'Sally', age: 12 }, { name: 'Billy', age: 9 } ]
	});
	
	dad.save().then( close )
	.then( null, err => { console.log( err ); } );
	
	// Parent.findOne().select( 'name' ).then( parent => {
	// 	console.log( parent );
	// 	close();
	// });
});

