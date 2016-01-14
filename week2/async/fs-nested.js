
var fs = require( 'fs' );

function readAllFiles( dir, callback ){
	
	fs.readdir( dir, function ( err, files ) {
		if ( err ) return callback( err );
		
		var count = files.length;
		// var results = new Array( count );
		
		files.forEach( ( file, i ) => {
			
			fs.readFile( dir + file, 'utf-8', function ( err, data ) {
				if ( err ) return callback( err );
				
				fs.writeFile( dir + file + '.new.txt', data + 'new', function ( err ) {
					// results[i] = data;
					count--;
					
					if( !count ) {
						callback();
					}
					
				});
			});
			
		});
	});
	
}

readAllFiles( 'files/', function ( err, results ) {
	if ( err ) console.log( 'error!', err );
	else console.log( results );
});
