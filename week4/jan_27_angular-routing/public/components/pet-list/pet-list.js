angular.module( 'controllers' ).controller( 'PetListCtrl', [ '$scope', '$http', 
	function( $scope, $http ) {
		$http.get( '/api/pets' ).then( function( res ) {
			$scope.pets = res.data;
		});
	}]
);