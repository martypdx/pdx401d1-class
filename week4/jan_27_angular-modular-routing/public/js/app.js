var app = angular.module( 'myApp', [
	'ngRoute',
	'controllers'
]);

var controllers = angular.module( 'controllers', [] );

app.config( [ '$routeProvider', function( $routeProvider ) {
	
	$routeProvider
		.when('/pets', {
			templateUrl: 'components/pet-list/pet-list.html',
			controller: 'PetListCtrl'
		})
		.when('/stores', {
			templateUrl: 'templates/stores.html',
			// controller: 'StoreCtrl'
		})
		.otherwise({
			redirectTo: '/pets'
		});
		
	
}]);
