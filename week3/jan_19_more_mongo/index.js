const app = require( './app' );
const mongoose = require( 'mongoose' );

const env = process.ENV || {};
const port = env.PORT || 5000;
const dbUri = env.DB_URI || 'mongodb://service:service@ds047365.mongolab.com:47365/pdx-pets'; //'mongodb://localhost/pets';

const db = mongoose.connect( dbUri );

app( db ).listen( port, () => {
	console.log( 'app running on port', port );	
});