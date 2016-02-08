const express = require('express');
// const bodyParser = require( 'body-parser' );
const morgan = require( 'morgan' );
const path = require( 'path' );
const sekrit = require( './sekrit' );
const session = require( 'express-session' );
const mongooseConfig = require( './configure-mongoose' );
const Grant = require('grant-express');
const grantConfig = require( './grant' );
const grant = new Grant( grantConfig );
const token = require( './lib/token' );
const login = require( './routes/login' );
const pets = require( './routes/pets' );

const app = express();

app.use( morgan('dev') );
// app.use( bodyParser.urlencoded({ extended: true }) );
// app.use( bodyParser.json() );

app.use( session({ 
	secret: sekrit, 
	resave: true, 
	saveUninitialized: true,
	cookie: { secure: false }
}));

app.use( grant );

const publicDir = path.join( __dirname, 'public' );
app.use( express.static( publicDir ) );

app.use( '/login', login );

function auth( req, res, next ) {
	token.verify( req.headers.token )
		.then( payload => next() )
		.catch( err => {
			res.status( 401 ).send( 'Not authorized' );
		});
}

app.use( '/api', auth, pets );

// module.exports = app;

// app.listen(3000);

const port = process.env.PORT || 3000;

app.listen( port, () => console.log( `app listenting on ${port}...` ));