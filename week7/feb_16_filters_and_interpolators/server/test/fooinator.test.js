const fooinator = require( '../lib/fooinator' );
const assert = require( 'assert' );

describe( 'fooinator', () => {
	it( 'fooinates', () => {
		assert.equal( fooinator( 'bar' ), 'foobarfoo' );		
	});
});