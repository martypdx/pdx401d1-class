'use strict';

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = _angular2.default.module('myApp', ['ngRoute', 'controllers']);

var controllers = _angular2.default.module('controllers', []);

/* some comment */

app.config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {

	$httpProvider.interceptors.push('authInterceptor');

	$routeProvider.when('/pets', {
		templateUrl: 'components/pet-list/pet-list.html',
		controller: 'PetListCtrl'
	}).when('/stores', {
		//templateUrl: 'templates/stores.html',
		template: 'These are the stores!'
		// controller: 'StoreCtrl'
	}).when('/logout', {
		//templateUrl: 'templates/stores.html',
		template: 'Log out!',
		controller: 'LogoutCtrl'
	}).otherwise({
		redirectTo: '/pets'
	});
}]);