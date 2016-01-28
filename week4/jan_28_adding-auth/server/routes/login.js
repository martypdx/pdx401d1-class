const router = new ( require( 'express' ).Router )();
const User = require( '../models/User' );
const token = require( '../lib/token' );
const mongoose = require( 'mongoose' );
const Authenticat = require( 'authenticat' );
const authenticat = new Authenticat( mongoose.connection );

const sendToken = ( token ) => String.raw`
	<script>
		window.localStorage.token='${token}';
		window.location.assign('/');
	</script>`;

router.use( '/', authenticat.router );

router.get( '/twitter/callback', ( req, res, next ) => {
	
	const profile = req.query;
	const twitterId = profile.raw.user_id;
	
	User.findOne( { twitterId } )
		.then( user => {
			if ( user ) return user;
			return new User({
				username: profile.raw.screen_name,
				twitterId,
				twitterProfile: profile,
				roles: []
			}).save();
		})
		.then( user => {
			return token.sign( user ); 
		})
		// .then( token => res.json({ token }) )
		.then( token => {
			res.send( sendToken( token ) );
		})
		.catch( next );
});

module.exports = router;
 