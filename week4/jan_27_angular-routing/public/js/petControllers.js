var petControllers = angular.module( 'petControllers', [ 'ngRoute' ] );

petControllers.controller( 'PetListCtrl', [ '$scope', '$http', 
	function( $scope, $http ) {
		$http.get( '/api/pets' ).then( function( res ) {
			$scope.pets = res.data;
		});
	}]
);

petControllers.controller( 'PetDetailCtrl', [ '$scope', '$routeParams', '$http', 
	function( $scope, $routeParams, $http ) {
		$http.get( '/api/pets/' + $routeParams.petId ).then( function( res ) {
			$scope.pet = res.data;
		});
	}]
);