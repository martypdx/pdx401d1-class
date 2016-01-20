const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
chai.use(chaiHttp);

const storage = require( '../in-memory' );
const app = require( '../app' )( storage );

describe( 'things api', () => {
	var request;
	var ids = [];
	var content = [ 'one', 'two', 'three' ];
	
	before( () => {
		request = chai.request( app );
	});
	
	it( 'should not have any things on initial get', done => {
		request.get( '/things' ).then( res => {
			assert.equal( res.body, 0 );
			done();
		}).catch( done );
	});
	
	function postItem( index ) {
		var text = content[ index ];
		
		return request.post( '/things' )
			.send({ 
				name: text,
				content: `content ${text}` 
			})
			.then( res => {
				const id = res.body.id;
				assert.ok( res.body.id );
				ids.push( id );
				return;
			});
	}
	
	it( 'should respond to POST with id', done => {
		postItem( 0 ).then( done, done );
	});
	
	it( 'should give back content when GET with id', done => {
		request.get( `/things/${ids[0]}` ).then( res => {
			assert.equal( res.body.name, content[0] );
			assert.equal( res.body.content, `content ${content[0]}` );
			done();
		}).catch( done );
	});
	
	it( 'should return list of posted content with id and name', done => {
		Promise.all([ postItem( 1 ), postItem( 2 ) ])
			.then( () => {
				return request.get( '/things' );
			})
			.then( res => {
				const body = res.body;
				assert.deepEqual( body.map( e => e.id ), ids );
				assert.deepEqual( body.map( e => e.content.name ), content );
				done();	
			})
			.catch( done );
	});
});