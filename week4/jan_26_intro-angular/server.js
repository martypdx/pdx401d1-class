const express = require( 'express' );
const app = express();
const publicPath = require( 'path' ).join( __dirname, 'public' );

app.use( express.static( publicPath ) );


var pets = [
	{ id: 1, name: 'fred', type: 'fish', food: 'seaweed' },
	{ id: 2, name: 'kattie', type: 'cat', food: 'tuna' },
	{ id: 3, name: 'donald', type: 'dog', food: 'chicken' }
];

app.get( '/api/pets', ( req, res ) => {
	res.json( pets.map( p => {
		return { id: p.id, name: p.name, type: p.type };
	}));
});

app.get( '/api/pets/:id', ( req, res ) => {
	var pet = pets.find( p => p.id == req.params.id );
	res.json( pet );
});

app.listen( process.env.PORT || 8000, () => console.log( 'app running...' ) );