const jwt = require( 'jwt-simple' );
const sekrit = process.env.TOKEN_SECRET;

module.exports = {
	make ( user ) {
		var payload = {
			sub: user._id,
			iat: moment().unix(),
			exp: moment().add( 14, 'days' ).unix()
		};
		
		return jwt.encode( payload, sekrit );
	},
	read ( token ) {
		return jwt.decode( token, sekrit );
	}
};