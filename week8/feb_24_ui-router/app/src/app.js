import angular from 'angular';
import router from 'angular-ui-router';
import resource from 'angular-resource';
import template from './app.html';
import components from './components';
import './css.css';

const app = angular.module( 'myApp', [
	router, resource, components
]);

var baseUrl = 'http://localhost:3000/api/v1';
var getPets = baseUrl + '/pets?populate=store';
var getStores = baseUrl + '/stores';

app.factory( 'PetService', function( $resource ) {
	return $resource( getPets );
});
app.factory( 'StoreService', function( $resource ) {
	return $resource( getStores );
});

app.factory( 'FooService', function( $timeout ){
	return $timeout(function(){
		return { foo: 'FOO' };
	}, 5000);
});

function passState( $scope, $stateParams ) {
	Object.keys( $stateParams ).forEach( key => {
		$scope[key] = $stateParams[key];
	});
}

app.config( function( $stateProvider ) {
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
					});
				}
			},
			controller: passState
		})
		.state( 'pets.type', {
			url: '/type/:petType',
			views: {
				details: {
					template: `<pet-type-details type="type"/>`,
					controller: passState
				},
				picture: {
					template: `<pet-type-picture type="type"/>`
				},
				availability: {
					template: `<pet-type-availability type="type"/>`
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
			controller: passState
		});
	
});

app.run( function( $rootScope, $state ) {
	$rootScope.place = 'earth';
	$rootScope.petTypes = [ 'bird', 'dog', 'lion' ];
	
	// $state.transitionTo( 'pets' );
});

document.body.innerHTML = template;
angular.bootstrap( document, [ app.name ], {} );




