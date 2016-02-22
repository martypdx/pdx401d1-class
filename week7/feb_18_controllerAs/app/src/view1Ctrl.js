export default function( app ) {
	
	app.controller( 'View1Ctrl', [ '$scope', function( $scope ) {
		
		$scope.animalTypes = [ 'cats', 'dogs', 'birds' ];
		
		$scope.add = function ( animal ) {
			$scope.animalTypes.push( animal );
		};
		
	}]);
	
}