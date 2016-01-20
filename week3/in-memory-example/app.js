const express = require( 'express' );
const bodyParser = require( 'body-parser' );

module.exports = function( storage ) {
	
	const app = express();
	
	app.use( bodyParser.json({ encoding: false }) );

	app.post( '/things', ( req, res ) => {
		storage.save( req.body ).then( d => res.json(d) );
	});

	app.get( '/things', ( req, res ) => {
		storage.getAll().then( d => res.json(d) );
	});

	app.get( '/things/:id', ( req, res ) => {
		storage.get( req.params.id )
			.then( d => res.json(d) )
			.catch( err => res.status( 400 ).send( err ) );
	});

	app.delete( '/things/:id', ( req, res ) => {
		storage.remove( req.params.id ).then( d => res.json(d) );
	});	
	
	return app;
};
