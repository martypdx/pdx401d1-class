const express = require( 'express' );
const app = express();

app.use( express.static( __dirname + '/public' ) );

app.use( ( req, res, next ) => {
	const url = '*';
	res.header( 'Access-Control-Allow-Origin', url );
	res.header( 'Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE' );
	res.header( 'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept' );
	next();
});

app.get('/api/monkeys', function(req, res){
	res.send([
		{ name: 'monkey 1', type: 'rhesus' },
		{ name: 'monkey 2', type: 'baboon' },
		{ name: 'monkey 3', type: 'marmot' }
	]);
});

module.exports = app;