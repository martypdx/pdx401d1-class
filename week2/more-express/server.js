var app = require( './app' );

app.use( function( req, res, next ) {
   res.send( 'This is our custom 404 page, no page ' + req.url ); 
});

app.listen( 8080, () => {
    console.log('app running...')
});