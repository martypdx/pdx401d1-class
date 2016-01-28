var app = angular.module( 'myApp', [
	'ngRoute',
	'controllers'
]);

var controllers = angular.module( 'controllers', [] );

app.config( [ '$routeProvider', '$httpProvider', function( $routeProvider, $httpProvider ) {
	
  	$httpProvider.interceptors.push( 'authInterceptor' );
	  
	$routeProvider
		.when('/pets', {
			templateUrl: 'components/pet-list/pet-list.html',
			controller: 'PetListCtrl'
		})
		.when('/stores', {
			//templateUrl: 'templates/stores.html',
			template: 'These are the stores!'
			// controller: 'StoreCtrl'
		})
		.when('/logout', {
			//templateUrl: 'templates/stores.html',
			template: 'Log out!',
			controller: 'LogoutCtrl'
		})
		.otherwise({
			redirectTo: '/pets'
		});
		
	
}]);
