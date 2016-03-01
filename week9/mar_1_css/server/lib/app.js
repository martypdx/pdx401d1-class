const express = require( 'express' );
const app = express();

const path = require( 'path' );

const bodyParser = require( 'body-parser' );
const methodOverride = require( 'method-override' );
const restify = require( 'express-restify-mongoose' );

const Pet = require( '../models/pet' );
const Store = require( '../models/store' );
const petRouter = express.Router();
const storeRouter = express.Router();

const auth = require( './auth.js' );

const token = require( './token' );
const moment = require( 'moment' );

const publicDir = path.resolve( path.join( __dirname, '../public' ) );
console.log( publicDir );

app.use( express.static( publicDir ) );


app.use( ( req, res, next ) => {
	const url = '*'; //http://localhost:8080';
	res.header( 'Access-Control-Allow-Origin', url );
	// res.header( 'Access-Control-Allow-Credentials', true );
	res.header( 'Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE' );
	res.header( 'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization' );
	next();
});


app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: false }) );
app.use( methodOverride() );

app.use( '/auth', auth );

restify.serve( petRouter, Pet, { name: 'pets' });
restify.serve( storeRouter, Store, { name: 'stores' });

function ensureAuthenticated(req, res, next) {
	if ( req.method === 'OPTIONS' ) return next();
	
	if (!req.header('Authorization')) {
		console.log( 'no auth header' );
		return res.status(401).send({ message: 'Please make sure your request has an Authorization header' });
	}
	const auth = req.header('Authorization').split(' ')[1];

	var payload = null;
	try {
		payload = token.verify( auth );
	}
	catch (err) {
		console.log( 'token issue', err );
		return res.status(401).send({ message: err.message });
	}

	if (payload.exp <= moment().unix()) {
		
		console.log( 'token expired' );
		return res.status(401).send({ message: 'Token has expired' });
	}
	req.user = payload.sub;
	
	next();
}

app.use( ensureAuthenticated, petRouter );
app.use( ensureAuthenticated, storeRouter );

module.exports = app;