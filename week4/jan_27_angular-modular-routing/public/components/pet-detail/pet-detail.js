
var ctrl = 'PetDetailCtrl';

angular.module( 'controllers' )
	.controller( ctrl, [ '$scope', '$routeParams', '$http',
		function( $scope, $routeParams, $http ) {
			$http.get( '/api/pets/' + $routeParams.petId ).then( function( res ) {
				$scope.pet = res.data;
			});
		}]
	)
	.config( [ '$routeProvider', function( $routeProvider ) {
		$routeProvider
			.when('/pets/:petId', {
				templateUrl: 'components/pet-detail/pet-detail.html',
				controller: ctrl
			});
	}]);