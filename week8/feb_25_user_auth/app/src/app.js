import angular from 'angular';
import router from 'angular-ui-router';
import resource from 'angular-resource';
import satellizer from 'satellizer';
import services from './services';
import passData from './pass-data';
import components from './components';
import ngDialog from 'ng-dialog';
import './main.css';
import 'ng-dialog/css/ngDialog.css';
import 'ng-dialog/css/ngDialog-theme-default.css';

const app = angular.module( 'myApp', [
	router, resource, satellizer, services, components, ngDialog
]);

app.config( function( $authProvider ) {
	$authProvider.twitter({
		url: 'http://localhost:3000/auth/twitter',
		// authorizationEndpoint: 'https://api.twitter.com/oauth/authenticate',
		// redirectUri: window.location.origin,
		// type: '1.0',
		// popupOptions: { width: 495, height: 645 }
	});
});

app.config( [ '$stateProvider', '$urlRouterProvider', function ( $stateProvider, $urlRouterProvider ) {
	
	$stateProvider
		.state( 'welcome', {
			url: '/welcome',
			template: `<h1>welcome to our app</h1>`
		})
		.state( 'pets', {
			url: '/pets?type',
			template: `<pets pets="pets"/>`,
			data: {
				requireAuth: true	
			},
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
			data: {
				requireAuth: true	
			},
			resolve: {
				stores ( StoreService ) {
					return StoreService.query();
				}
			},
			template: '<stores stores="stores"/>',
			controller: passData()
		});
		
		$urlRouterProvider.otherwise( '/welcome' );
}]);

app.run( [ '$rootScope', 'User', 'ngDialog', '$state', '$auth', 
function ( $rootScope, User, ngDialog, $state, $auth ) {

	$auth.logout();
	
	$rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
   
    	if ( toState.data && toState.data.requireAuth && !$auth.isAuthenticated() /*!User.isAuthed()*/ ) {
      		event.preventDefault();
      		const dialog = ngDialog.open({ 
				template: `<signin success="success(response)"/>`, 
				plain: true,
				controller: [ '$scope', function( $scope ){
					$scope.success = function( response ){
						dialog.close();
						//User.setToken();
						return $state.go( toState.name, toParams );
					};
				}]
			});
			
			dialog.closePromise
				.then( () => alert( 'success!') )
				.catch( () => alert( 'failure!') );
    	}
	});
  
}]);

angular.bootstrap( document, [ app.name ], {} );




