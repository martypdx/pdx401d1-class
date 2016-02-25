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
			// example of custom data that this state should requireAuth
			data: {
				requireAuth: true
			},
			resolve: {
				// example of resolve based auth...
				auth ( user, login ) {
					if ( !user.hasCurrent() ) {
						// do login routine
						return login.open()
							.then( userObj => {
								user.setUser( userObj );
								return true;
							})
							.catch( err => {
								return { 
									authenticated: false,
									error: err
								};
							});
					}	
					else {
						return Promise.resolve( true );
					}
				},
				stores ( StoreService ) {
					return StoreService.query();
				}
			},
			template: '<stores stores="stores"/>',
			controller: passData()
		});
});

app.run( function ( $rootScope, user, login ) {

  // use state change to check auth
  $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
   
    if ( toState.data.requireAuth && !user.hasCurrent() ) {
      event.preventDefault();
      // get me a login modal!
    }
  });
  
  // or, in conjuction with auth resolve in state, catch the errors
  $rootScope.$on("$routeChangeError", function(event, current, previous, eventObj) {
    if (eventObj.authenticated === false) {
      $location.path("/login");
    }
  });

});

angular.bootstrap( document, [ app.name ], {} );




