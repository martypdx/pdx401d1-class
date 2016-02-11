
describe( 'The Animals Controller', () => {
	
	beforeEach( angular.mock.module( 'myApp' ) );
	
	var $controller, $scope;
	
	beforeEach( angular.mock.inject( function( _$rootScope_, _$controller_ ) {
		$controller = _$controller_;
		$scope = _$rootScope_.$new();
	}));
	
	it( 'has default data', () => {
		/*var controller = */$controller( 'View1Ctrl', { $scope } );
		assert.equal( $scope.user, 'jimmy' );
		assert.deepEqual( $scope.animalTypes, [ 'cats', 'dogs', 'birds' ] );
	});
	
	it( 'can add animal to default data', () => {
		/*var controller = */$controller( 'View1Ctrl', { $scope } );
		$scope.add( 'lizards' );
		assert.deepEqual( $scope.animalTypes, [ 'cats', 'dogs', 'birds', 'lizards' ] );
	});
	
	
});