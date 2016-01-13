var express = require('express');
var pets = require('./routes/pets');
var morgan = require('morgan');
var app = express();


app.use( express.static( __dirname + '/public' ) );
app.use( morgan('tiny') );

app.use( function( req, res, next ) {
    if ( req.method !== 'POST') next();
    
    var body = '';
    req.on( 'data', chunk => {
        body += chunk.toString(); 
    });
    req.on( 'end', () => {
        console.log( 'ended post parse', body);
        req.body = body;
        next();
    });
});

app.use( '/pets', pets );


app.get( '/order', ( req, res, next ) => {
   res.write( 'hello mars' ); 
   next();
});

app.get( '/order', ( req, res, next ) => {
   res.write( 'hello earth' ); 
   next();
});

app.get( '/order', ( req, res, next ) => {
   res.end( '!' ); 
});



module.exports = app;