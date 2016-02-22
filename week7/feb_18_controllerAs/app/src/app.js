import content from './content';
import cool from 'cool-ascii-faces';
import './css/main.css';
import angular from 'angular';
import router from 'angular-route';
import template from './app.html';
import view1 from './view1.html';
import view2 from './view2.html';
import view1Ctrl from './view1Ctrl';

const app = angular.module( 'myApp', [
	router	
]);

view1Ctrl( app );

app.controller( 'AppCtrl', [ '$http', '$scope', function($http){
	this.place = 'world';
	
	$http.get( 'http://localhost:3000/api/monkeys' ).then( res => {
		this.monkeys = res.data;
	});
}]);

app.controller( 'ChildCtrl', [ '$http', function($http){
	this.name = 'child controller';
}]);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/view1', {
		template: view1,
		controller: 'View1Ctrl'
	});
	$routeProvider.when('/view2', {
		template: view2
	});
	$routeProvider.otherwise({redirectTo: '/view1'});
}]);

app.run( [ '$rootScope', function( $rootScope ) {
	$rootScope.user = 'jimmy';
}]);

document.body.innerHTML = template;

angular.bootstrap( document, [ app.name ], {
	
});

