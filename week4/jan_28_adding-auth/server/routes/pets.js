const router = new ( require( 'express' ).Router )();

var pets = [
	{ id: 1, name: 'fred', type: 'fish', food: 'seaweed' },
	{ id: 2, name: 'kattie', type: 'cat', food: 'tuna' },
	{ id: 3, name: 'donald', type: 'dog', food: 'chicken' }
];

router.get( '/pets', ( req, res ) => {
	res.json( pets.map( p => {
		return { id: p.id, name: p.name, type: p.type };
	}));
});

router.get( '/pets/:id', ( req, res ) => {
	var pet = pets.find( p => p.id == req.params.id );
	res.json( pet );
});

module.exports = router;
