var app = angular.module( 'myApp', [
	'ngRoute',
	'controllers'
]);

var controllers = angular.module( 'controllers', [] );

app.config( [ '$routeProvider', function( $routeProvider ) {
	
	$routeProvider
		.when('/pets', {
			templateUrl: 'templates/petList.html',
			controller: 'PetListCtrl'
		})
		.when('/pets/:petId', {
			templateUrl: 'templates/petDetail.html',
			controller: 'PetDetailCtrl'
		})
		.when('/stores', {
			templateUrl: 'templates/stores.html',
			// controller: 'StoreCtrl'
		})
		.otherwise({
			redirectTo: '/pets'
		});
		
	
}]);
