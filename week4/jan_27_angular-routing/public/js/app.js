var app = angular.module( 'myApp', [ 
	'ngRoute',
	'petControllers' 
]);

app.config( [ '$routeProvider', function( $routeProvider ) {
	$routeProvider
		.when('/pets', {
			templateUrl: 'templates/list.html',
			controller: 'PetListCtrl'
		})
		.when('/pets/:petId', {
			templateUrl: 'templates/detail.html',
			controller: 'PetDetailCtrl'
		})
		.otherwise({
			redirectTo: '/pets'
		});
}]);

