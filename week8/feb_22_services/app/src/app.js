import './css/main.css';
import angular from 'angular';
import angularRouter from 'angular-route';
import angularResource from 'angular-resource';
import template from './app.html';
import filters from './filters';
import components from './components';
import services from './services';

const app = angular.module( 'myApp', [
	angularRouter,
	angularResource,
	filters,
	components,
	services
]);


// app.value( 'apiUrl', 'http://localhost:3000/api/v1' );

app.config( [ '$routeProvider', function( $routeProvider ) {

	$routeProvider
		.when('/pets', {
			template: '<pets></pets>'
		})
		.when('/stores', {
			template: '<stores></stores>'
		})
		.otherwise({
			redirectTo: '/pets'
		});
}]);


document.body.innerHTML = template;

angular.bootstrap( document, [ app.name ], {} );

