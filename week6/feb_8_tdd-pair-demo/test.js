var bookList = ['A', 'B', 'C', 'D', 'E'];
var discount = [0, 0, 0.05, .1, .2, .25];
	
const costOfOneBook = 8;

const assert = require( 'assert' );

it( 'costs nothing when no books', () => {
	assert.equal( getDiscount(), 0 );	
});

it( 'costs 8 EUR for one book', () => {
	assert.equal( getDiscount(['A']), costOfOneBook );	
});

it( 'costs 16*.95 EUR for two different books', () => {
	assert.equal( getDiscount(['A', 'B']), costOfOneBook * 2 *.95 );	
});

it( 'costs 16 EUR for two copies of the same book', () => {
	assert.equal( getDiscount(['A', 'A']), costOfOneBook * 2 );	
});

it( 'costs 16 + 7.6 EUR for two of same, one other', () => {
	assert.equal( getDiscount(['A', 'A', 'B']), costOfOneBook*(1+2*.95) );	
});

it( 'costs 8*3*.9 EUR for three different books', () => {
	assert.equal( getDiscount(['A', 'B', 'C']), costOfOneBook*(3*.9) );	
});

it( 'costs 8*3 EUR for three of the same books', () => {
	assert.equal( getDiscount(['C', 'C', 'C']), costOfOneBook*3 );	
});

/*
2 copies of the first book
2 copies of the second book
2 copies of the third book
1 copy of the fourth book
1 copy of the fifth book

Answer: 51.60 EUR
*/

it( 'costs 51.60 EUR for webpage example', () => {
	assert.equal( getDiscount(['A','A', 'B','B', 'C','C', 'D', 'E']), 51.60 );	
});

function getDiscount(books) {
    if (!books || !books.length) { return 0; }
	
	var lookup = { A: 0, B: 1, C: 2, D: 3, E: 4 };
	var sets = [ 0, 0, 0, 0, 0 ];
	
	books.forEach( b => sets[ lookup[b] ]++ );
	
	var total = 0;
	
	while ( true ) {
		sets = sets.filter( b => b > 0 );
		if ( !sets.length ) break;
		total += getSetCost( sets.length );
		sets = sets.map( b => --b );
	}
	
	return total;
}

function getSetCost( setCount ) {
	return (1 - discount[setCount]) * setCount * costOfOneBook;
}
