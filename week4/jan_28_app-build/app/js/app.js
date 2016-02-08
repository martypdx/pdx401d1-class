import 'check-auth';
import angular from 'angular';
import ngRoute from 'angular-route';
import components from './components';
import authInterceptor from './auth-interceptor';

const app = angular.module( 'myApp', [
	ngRoute,
	components
]);

app.config( [ '$routeProvider', '$httpProvider', function( $routeProvider, $httpProvider ) {
	
  	$httpProvider.interceptors.push( authInterceptor );
	  
	$routeProvider
		.when('/stores', {
			//templateUrl: 'templates/stores.html',
			template: 'These are the stores!'
			// controller: 'StoreCtrl'
		})
		.when('/logout', {
			//templateUrl: 'templates/logout.html',
			template: 'Log out!',
			controller: 'LogoutCtrl'
		})
		.otherwise({
			redirectTo: '/pets'
		});
}]);
