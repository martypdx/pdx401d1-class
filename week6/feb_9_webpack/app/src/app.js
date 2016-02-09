import content from './content';
import cool from 'cool-ascii-faces';
import './css/main.css';
import angular from 'angular';
import router from 'angular-route';
import template from '!html!./app.html';
import view1 from '!html!./view1.html';
import view2 from '!html!./view2.html';

const app = angular.module( 'myApp', [
	router	
]);

app.controller( 'AppCtrl', [ '$scope', '$http', function($scope, $http){
	$scope.place = 'world';
	$http.get( 'http://localhost:3000/api/monkeys' ).then( res => {
		$scope.monkeys = res.data;
	});
}]);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/view1', {
		template: view1
	});
	$routeProvider.when('/view2', {
		template: view2
	});
	$routeProvider.otherwise({redirectTo: '/view1'});
}]);

document.body.innerHTML = template;

angular.bootstrap( document, [ app.name ], {
	
});

