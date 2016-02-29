const mongoose = require( './lib/setup-mongoose' );
const app = require( './lib/app' );
const port = process.env.PORT || 3000;

app.listen( port, () => console.log( `server listening on port ${port}...` ) );

