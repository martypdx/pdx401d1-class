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
/*2 copies of the first book
2 copies of the second book
2 copies of the third book
1 copy of the fourth book
1 copy of the fifth book

Answer: 51.60 EUR*/

it( 'costs 51.60 EUR for webpage example', () => {
	assert.equal( getDiscount(['A','A', 'B','B', 'C','C', 'D', 'E']), 51.60 );	
});

function getDiscount(books) {
    if (!books || !books.length) { return 0; }
	
	var sets = { A: 0, B: 0, C: 0, D: 0, E: 0 };

	books.forEach( b => sets[b]++ );
	
	var total = 0;
	var keys;
	while ( keys = Object.keys(sets), keys.length ) {
		var setCount = 0;
		keys.forEach( key => {
			if ( !sets[key] ) { delete sets[key]; }
			else {
			   setCount++;
			   sets[key]--;
			}
		});
		total += getSetCost( setCount );
	}	
	return total;
}

function getSetCost( setCount ) {
    //assert (setCount > 0);
	return (1 - discount[setCount]) * setCount * costOfOneBook;
}
