import template from './signin.html';

export default function( ngModule ) {
	ngModule.directive( 'signin', function() {
		return {
			replace: true,
			restrict: 'E',
			template,
			scope: {
				success: '&'
			},
			controller ( $scope, $auth ) {
				$scope.authenticate = function( provider ) {
					return $auth.authenticate( provider )
						.then( response => {
							$scope.success( { response } );
							return true;
						})
						.catch( error => {
							$scope.error = error;
							return false;
						});
				};
  			}
		};
	});
}