var net = require('net');

var client = net.connect( { 
    host: '127.0.0.1',
    port: 8124 
}, function () { //'connect' listener
  console.log('connected to server!');
  client.write('world!\r\n');
});

client.on('data', (data) => {
  console.log(data.toString());
  
});

client.on('end', () => {
  console.log('disconnected from server');
});

process.on('exit', (code) => {
  client.end();
});