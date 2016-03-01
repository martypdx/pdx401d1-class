describe( 'signin', () => {
	
	var $auth = {};
	
	beforeEach( angular.mock.module( 'myApp', function( $provide ) {
		$provide.value( '$auth', $auth );	
	}));
	
	var $scope, render;
	
	beforeEach( angular.mock.inject( function( $rootScope, $compile ) {
		$scope = $rootScope.$new();
		const html = `<signin success="success(response)"/>`;
		render = $compile( html );
	}));
	
	it( 'passes authenticate', done => {
		const response = {};
		let authCalled = false;
		let successCalled = false;
		
		$auth.authenticate = function( provider ){
			authCalled = true;
			assert.equal( provider, 'twitter' );
			return Promise.resolve( response );	
		};
		
		$scope.success = function( res ){
			successCalled = true;
			assert.equal( res, response );
		};

		const signin = render( $scope );
		$scope.$digest();
		
		const isoScope = signin.isolateScope(); 
		
		isoScope.authenticate( 'twitter' ).then( success => {
			assert.ok( success );
			assert.ok( authCalled );
			assert.ok( successCalled );
			done();
		}).catch( done );
	});
	
	it( 'fails authenticate', done => {
		
		const error = 'bad user';
		let authCalled = false;
		let successCalled = false;
		
		$auth.authenticate = function( provider ){
			authCalled = true;
			return Promise.reject( error );	
		};
		
		$scope.success = function( res ){
			successCalled = true;
		};

		const signin = render( $scope );
		$scope.$digest();
		
		const isoScope = signin.isolateScope(); 
		
		isoScope.authenticate( 'twitter' ).then( success => {
			assert.notOk( success, 'success result should be false' );
			assert.ok( authCalled, 'authCalled' );
			assert.notOk( successCalled, 'successCalled' );
			assert.equal( isoScope.error, error );
			done();
		}).catch( done );
	});
	
});