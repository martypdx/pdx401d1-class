
var cache = {};


// what if I want to do something when async work is done????
getLetter('c', function(value){
	console.log( '1st return value', value);

	getLetter('c', function(value) {
		console.log( '2nd return value', value);
	});

	console.log( 'just called second time' );

});

console.log( 'just called first time' );


function getLetter( c, callback ){

	if ( cache[c] ) {
		// process.nextTick( function(){
			callback( cache[c] );
		// });
		return;
	}


	setTimeout( function() {
		cache[c] = c + ' cached';
		callback( cache[c] );
	}, 0);

}
