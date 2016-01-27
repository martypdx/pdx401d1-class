var petControllers = angular.module( 'petControllers', [] );

petControllers.controller( 'PetListCtrl', [ '$scope', '$http', 
	function( $scope, $http ) {
		
		$scope.select = function( pet ) {
			$scope.selectedId = pet.id;
		};
		
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
