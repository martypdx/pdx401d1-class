import angular from 'angular';

var ctrl = 'PetListCtrl';

angular.module( 'components' )
	.config( [ '$routeProvider', function( $routeProvider ) {
		$routeProvider
			.when('/pets', {
				templateUrl: 'templates/pet-list.html',
				controller: ctrl
			});
	}])
	.controller( 'PetListCtrl', [ '$scope', '$http', 
		function( $scope, $http ) {
			$scope.token = window.localStorage.token;
			
			$http.get( '/api/pets' ).then( function( res ) {
				$scope.pets = res.data;
			});
		}]
	);