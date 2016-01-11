const net = require('net');
const fs = require('fs');

const server = net.createServer( function(c) { //'connection' listener
    
    console.log('client connected');
    
    c.on('end', () => {
        console.log('client disconnected');
    });
    
    c.write('hello\r\n');
    
    fs.createReadStream('somefile.txt').pipe(c);
});

server.listen(8124, () => { //'listening' listener
    console.log('server bound');
});