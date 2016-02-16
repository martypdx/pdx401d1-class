
describe( 'The Animals Controller', () => {
	
	beforeEach( angular.mock.module( 'myApp' ) );
	
	var momentFilter;
	
	beforeEach( angular.mock.inject( [ 'momentFilter', function( _momentFilter_ ) {
		momentFilter = _momentFilter_;
	}]));
	
	it( 'defaults to fromNow', () => {
		assert.equal( momentFilter( new Date() ), 'a few seconds ago' );
	});
	
	it( 'accept format string', () => {
		var now = new Date();
		assert.equal( momentFilter( new Date(), 'YYYY' ), now.getFullYear() );
	});
	
	/* alternate syntax using directly in test */
	
	/* explicit */
	it( 'defaults to fromNow', angular.mock.inject( [ 'momentFilter', function( banana ) {
		assert.equal( banana( new Date() ), 'a few seconds ago' );
	}]));
	
	/* implicit */
	it( 'accept format string', angular.mock.inject( function( momentFilter ) {
		var now = new Date();
		assert.equal( momentFilter( new Date(), 'YYYY' ), now.getFullYear() );
	}));
	
	
});