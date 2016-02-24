import angular from 'angular';
import router from 'angular-ui-router';
import resource from 'angular-resource';
import services from './services';
import passData from './pass-data';
import components from './components';
import './main.css';

const app = angular.module( 'myApp', [
	router, resource, services, components
]);

app.config( function( $stateProvider, $locationProvider, $urlRouterProvider ) {
	
	// $locationProvider.html5Mode(true);
	
//    $urlRouterProvider.rule(function ($localStorage, $location) {
// 	   if ( !window.localStorage.token ) {
// 		   window.location = '/signin';
// 	   }
//    });
	
	$stateProvider
		.state( 'pets', {
			url: '/pets?type',
			template: `<pets pets="pets"/>`,
			resolve: {
				pets ( PetService, $stateParams ) {
					return PetService.query({ 
						query: { 
							type: $stateParams.type 
						} 
					}).$promise;
				}
			},
			controller: passData( [ 'pets' ] )
			// controller: function( $scope, $stateParams, pets ) {
			// 	$scope.type = $stateParams.type;
			// 	$scope.pets = pets;
			// }
		})
		.state( 'pets.type', {
			url: '/type/:petType',
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
			resolve: {
				stores ( StoreService ) {
					return StoreService.query();
				}
			},
			template: '<stores stores="stores"/>',
			controller: passData()
		});
});

angular.bootstrap( document, [ app.name ], {} );




