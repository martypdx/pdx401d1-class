import template from './pets.html';
import petDetail from './pet-detail/pet-detail';

export default function( $stateProvider ) {
	$stateProvider.state( 'pets', {
		url: '/pets?type',
		template,
		resolve: {
			pets ( PetService, $stateParams ) {
				return PetService.query({ 
					query: { 
						type: $stateParams.type 
					} 
				});
			}
		},
		controller: function( $scope, pets ){
			$scope.pets = pets;
		}
	});
	
	petDetail( $stateProvider );
}