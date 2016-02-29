const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require( '../lib/app' );

chai.use(chaiHttp);

describe( 'monkeys api', () => {

	var request;
	
	beforeEach( () => {
		request = chai.request( app );
	});
	
	it( 'GET: returns a barrel of monkeys', done => {
		request.get( '/api/monkeys' ).then( res => {
			chai.assert.equal( res.body.length, 3 );
			done();
		}).catch( done );
	});
});