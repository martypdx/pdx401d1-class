const net = require('net');
const fs = require('fs');

const clients = [];

const server = net.createServer( function(c) { //'connection' listener
    
    if ( clients.length ) {
        broadcast( c.localPort + ' joined', c );
        c.write( clients.map( c => c.localPort ).join() );
    }
    else {
        c.write( 'you are the first to join\r\n')
    }
    
    clients.push(c);
      
    c.on('close', () => {
        const i = clients.findIndex( f => f === c );
        clients.splice( i, 1 );
        broadcast( c.localPort + ' left', c );
        console.log( 'closed' );
    });
    
    c.on('data', data => {
       broadcast( c.localPort + ' sez: ' + data.toString(), c );
    });
});

function broadcast( message, sender ) {
    clients.forEach( client => {
        if ( client === sender ) return;
        client.write( message + '\r\n'); 
    });
}

server.listen(8124, () => { //'listening' listener
    console.log('server bound');
});