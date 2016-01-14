var fs = require( 'sander' );

// var promise = fs.readdir( './files' );

function readdir ( dir ) {
	return new Promise( function( resolve, reject ) {
		
		fs.readdir( dir, function( err, files ) {
			if ( err ) reject( err );
			else resolve( files );
		});
	});
}

var dir = './files/';

fs.readdir( dir )
	.then( files => files.map( f => dir + f ) )
	.then( paths => paths.map( copyNew ) )
	.then( promises => Promise.all )
	.then( contents => {
		console.log( contents );
	})
	.catch( err => {
		console.log( 'error!', err );
	});
	
function copyNew( path ) {
	return fs.readFile( path, { encoding: 'utf-8' } ).then( contents => {
		return fs.writeFile( path + '.new.txt', contents + 'new' );
	});
}