const express = require( 'express' );
const app = express();

const bodyParser = require( 'body-parser' );
const methodOverride = require( 'method-override' );
const restify = require( 'express-restify-mongoose' );

const Pet = require( '../models/pet' );
const Store = require( '../models/store' );
const petRouter = express.Router();
const storeRouter = express.Router();

const auth = require( './auth.js' );

app.use( ( req, res, next ) => {
	const url = '*';
	res.header( 'Access-Control-Allow-Origin', url );
	res.header( 'Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE' );
	res.header( 'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization' );
	next();
});

app.use( express.static( __dirname + '/public' ) );

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: false }) );
app.use( methodOverride() );

app.use( '/auth', auth );

restify.serve( petRouter, Pet, { name: 'pets' });
restify.serve( storeRouter, Store, { name: 'stores' });

app.use( petRouter );
app.use( storeRouter );

module.exports = app;