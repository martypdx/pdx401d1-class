var app = angular.module( 'myApp', [] );

app.controller( 'MainController', function( $scope, $http ) {
	
	$scope.select = function( pet ) {
		$scope.selectedId = pet.id;
	};
	
	$http.get( '/api/pets' ).then( function( res ) {
		$scope.pets = res.data;
	});
});

app.controller( 'DetailController', function( $scope, $http ) {
	
	$scope.$watch( 'selectedId', function( id ){
		if ( id === null ) {
			$scope.pet = null;
			return;
		}
		
		$http.get( '/api/pets/' + id ).then( function( res ) {
			$scope.pet = res.data;
		});
	});
	
});