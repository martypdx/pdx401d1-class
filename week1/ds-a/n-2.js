'use strict';


let operations;

function hasDuplicate( array ) {
	var has = {};

 	for( var i = 0, l = array.length; i < l; i++ ) {
 		const value = array[i];
 		operations++;
 		if ( has[ value ] ) { return true; }
 		has[ value ] = true;
 	}

 	return false;
}

run( 100 );
run( 1000 );
run( 10000 );
run( 100000 );
run( 1000000 );
run( 10000000 );
run( 100000000 );

function run( count ) {
	const arr = new Array( count );

	for( var k = 0; k < count; k++ ) {
		arr[k] = k;
	}

	operations = 0;
	console.time( 'duplicate' );
	console.log( 'hasDuplicate', hasDuplicate( arr ) );
	console.timeEnd( 'duplicate' );
	console.log( count, '-->', operations );
}