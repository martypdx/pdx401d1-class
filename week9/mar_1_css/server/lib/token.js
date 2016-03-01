const jwt = require( 'jwt-simple' );
const sekrit = process.env.TOKEN_SECRET;

module.exports = {
	sign ( payload ) {
		return jwt.encode( payload, sekrit );
	},
	verify ( token ) {
		return jwt.decode( token, sekrit );
	}
};