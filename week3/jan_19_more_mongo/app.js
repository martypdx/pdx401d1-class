const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const methodOverride = require( 'method-override' );

const path = require( 'path' );
const publicDir = path.join( __dirname, 'public' );

const restify = require( 'express-restify-mongoose' );
const Pet = require( './models/Pet' );

module.exports = function createApp( /* db */ ) {

	const app = express();
	
	app.use( express.static( publicDir ) );
	app.use( bodyParser.json() );
	// app.use( methodOverride() );
	
	const router = express.Router();
	restify.serve( router, Pet );
	app.use(router);
	
	return app;
};

