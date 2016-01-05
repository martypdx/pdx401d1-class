var assert = require( 'assert' );

describe( 'fizzbuzz', () => {
	
	it( 'returns correct sequence', () => {
		assert.deepEqual( fbCount(15), [
			1, 2, 'fizz', 4, 'buzz', 
			'fizz', 7, 8, 'fizz', 'buzz', 
			11, 'fizz', 13, 14, 'fizzbuzz'
		]);
	});
});

function fbCount( count ){
	return [...Array(count)].map((x, n) => {
		n++;
		var value = '';
		if ( n % 3 === 0 ) value = 'fizz';
		if ( n % 5 === 0 ) value += 'buzz';
		return value || n;
	});
}