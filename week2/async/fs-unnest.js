
var fs = require( 'fs' );

function readAllFiles( dir, callback ){
	
	fs.readdir( dir, function ( err, files ) {
		if ( err ) return callback( err );
		
		var count = files.length;
		// var results = new Array( count );
		
		files.forEach( ( file, i ) => {
			copyNewFile( dir + file, function( err ) {
				if ( err ) return callback( err );
				count--;
				
				if( !count ) {
					callback();
				}
			});
		});
	});
	
	function copyNewFile( path, callback ){
		fs.readFile( path, 'utf-8', function ( err, data ) {
			if ( err ) return callback( err );
			fs.writeFile( path + '.new.txt', data + 'new', callback );
		});
	}
	
}

readAllFiles( 'files/', function ( err, results ) {
	if ( err ) console.log( 'error!', err );
	else console.log( results );
});
