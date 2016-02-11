export default function( app ) {
	
	app.controller( 'View1Ctrl', [ '$scope', function( $scope ) {
		
		$scope.state = 'edit';
		
		$scope.animalTypes = [ 'cats', 'dogs', 'birds' ];
		
		$scope.add = function ( animal ) {
			$scope.animalTypes.push( animal );
		};
		
		$scope.submit = () => $scope.state = $scope.foo ;
		
	}]);
	
}