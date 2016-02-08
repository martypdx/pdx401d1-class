angular.module( 'controllers' )
	.controller( 'LogoutCtrl', [ '$window', function( $window ) {
		$window.localStorage.removeItem( 'token' );
		$window.sessionStorage.removeItem( 'token' );
		redirectToLogin();
	}]);
