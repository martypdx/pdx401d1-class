const storage = require( './in-memory' );
const app = require( './app' )( storage );
const port = process.env.PORT || 3000;

app.listen( port, () => console.log( `app running on ${port}` ) );