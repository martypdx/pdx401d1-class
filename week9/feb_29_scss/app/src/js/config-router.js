import passData from './pass-data';

export default function( app ) {
	app.config( [ '$stateProvider', '$urlRouterProvider', configRoutes ]);
}

function configRoutes( $stateProvider, $urlRouterProvider ) {
	
	$stateProvider
		.state( 'pets', {
			url: '/pets',
			template: `<pets pets="pets"/>`,
			data: {
				requireAuth: true	
			},
			resolve: {
				pets ( PetService, $stateParams ) {
					return PetService.query().$promise;
				}
			},
			controller: passData( [ 'pets' ] )
		})
		.state( 'pets.type', {
			url: '/:petType',
			views: {
				details: {
					template: `<pet-type-details type="petType"/>`,
					controller: passData()
				},
				picture: {
					template: `<pet-type-picture type="petType"/>`
				},
				availability: {
					template: `<pet-type-availability type="petType"/>`
				}
			}
		})
		.state( 'stores', {
			url: '/stores',
			data: {
				requireAuth: true	
			},
			resolve: {
				stores ( StoreService ) {
					return StoreService.query().$promise;
				}
			},
			template: '<stores stores="stores"/>',
			controller: passData( [ 'stores' ] )
		});
		
		$urlRouterProvider.otherwise( '/pets' );
}