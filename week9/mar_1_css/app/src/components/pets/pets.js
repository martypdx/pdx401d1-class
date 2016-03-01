import template from './pets.html';
import './pets.scss';

export default function( ngModule ) {
	ngModule.directive( 'pets', function() {
		return {
			replace: true,
			restrict: 'E',
			template,
			scope: {
				pets: '='
			},
			controller( $scope, PetService ) {
				$scope.selected = [];
				
				$scope.remove = function( pet, index ){
					$scope.saving = true;
					
					pet.$remove().then( () => {
						$scope.pets.splice( index, 1 );
						$scope.saving = false;
					});
					
				};
			}
		};
	});
}