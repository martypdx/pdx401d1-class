var net = require( 'net' );

var server = net.createServer( function( socket ) {
    
    socket.write('Hello ' + socket.remoteAddress + ':' + socket.remotePort + '\n');
    
    socket.on( 'data', function( data ) {
        console.log( data );
    });
    
    socket.on( 'end', function( data ) {
        console.log( 'client disconnect' );
    });
    
});

var config = {
    address: '127.0.0.1',
    port: 8080
};

server.listen( config.address, config.port, function(err){
    if ( err ) return console.log('error!', err);
    console.log( 'server listening', config );
} );

