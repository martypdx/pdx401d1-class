angular.module( 'controllers' ).controller( 'PetListCtrl', [ '$scope', '$http', 
	function( $scope, $http ) {
		$scope.token = window.localStorage.token;
		
		$http.get( '/api/pets' ).then( function( res ) {
			$scope.pets = res.data;
		});
	}]
);