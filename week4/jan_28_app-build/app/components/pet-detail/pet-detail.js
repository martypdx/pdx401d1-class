import angular from 'angular';

var ctrl = 'PetDetailCtrl';

angular.module( 'components' )
	.config( [ '$routeProvider', function( $routeProvider ) {
		$routeProvider
			.when('/pets/:petId', {
				templateUrl: 'templates/pet-detail.html',
				controller: ctrl
			});
	}])
	.controller( ctrl, [ '$scope', '$routeParams', '$http',
		function( $scope, $routeParams, $http ) {
			$http.get( '/api/pets/' + $routeParams.petId ).then( function( res ) {
				$scope.pet = res.data;
			});
		}]
	);