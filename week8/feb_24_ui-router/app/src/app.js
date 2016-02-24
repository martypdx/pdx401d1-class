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

function passData( args ) {
	
	const passState = function( $scope, $stateParams ) {
		Object.keys( $stateParams ).forEach( key => {
			$scope[key] = $stateParams[key];
		});
		
		if ( args ) {
			args.forEach( ( a, i ) => {
				$scope[ args[i] ] = arguments[ i + 2 ];
			});
		}
	};
	
	const inject = [ '$scope', '$stateParams' ];
	if ( args ) {
		args.forEach( a => inject.push(a) );
	}
	
	passState.$inject = inject;
	
	return passState;
}

app.config( function( $stateProvider, $locationProvider, $urlRouterProvider ) {
	
	$locationProvider.html5Mode(true);
	
	// Here's an example of how you might allow case insensitive urls
   // Note that this is an example, and you may also use 
   // $urlMatcherFactory.caseInsensitive(true); for a similar result.
   $urlRouterProvider.rule(function ($localStorage, $location) {
	   if ( !window.localStorage.token ) {
		   window.location = '/signin';
	   }
   });
	
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

app.run( function( $rootScope, $state ) {
	$rootScope.place = 'earth';
	$rootScope.petTypes = [ 'bird', 'dog', 'lion' ];
	
	// $state.transitionTo( 'pets' );
});

document.body.innerHTML = template;
angular.bootstrap( document, [ app.name ], {} );




