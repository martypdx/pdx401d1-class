var http = require( 'http' );
var fs = require( 'fs' );
var qs = require( 'querystring' );

var indexPage = fs.readFileSync( 'index.html', 'utf-8' );

var pets = [
    { type: 'cat', name: 'bob' },
    { type: 'snake', name: 'smiley' },
    { type: 'dog', name: 'fido' },
    { type: 'bird', name: 'poly' }
];

var server = http.createServer(function( req, res ){
    
    
   if ( req.url === '/pets' ) {
       if( req.method === 'POST' ) {
           pets.push({ type: 'new', name: 'new' });
       }
       res.writeHead(200, { 
        'Content-Type': 'application/json'
       });
       
       res.end( JSON.stringify(pets) );
   }
   else {
       
    res.writeHead(200, { 
        'Content-Type': 'text/html'
    });
    
    var split = req.url.split('?');
    var url = split[0];
    var query = split[1];
    
    if ( query ) query = query.split( '&' );
    
    res.end( indexPage
        .replace( 'method', req.method )
        .replace( 'url', url )
        .replace( 'qs', query ) );   
   }
});

server.listen( 8080 );
