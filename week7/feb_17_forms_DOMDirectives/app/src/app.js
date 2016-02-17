import './css/main.css';
import angular from 'angular';
import angularAnimate from 'angular-animate';
import template from './app.html';
import filters from './filters';

const app = angular.module( 'myApp', [
	angularAnimate,
	filters
]);

app.controller( 'AppCtrl', [ '$scope', function( $scope ){
	$scope.person = {
		name: 'Sarah Joe',
		age: 14,
		toy: 'airplane'
	};
}]);

app.controller( 'EditCtrl', [ '$scope', function( $scope ){
	
	$scope.update = function() {
		$scope.$parent.person = angular.copy($scope.edit);
	};

	$scope.reset = function() {
		$scope.edit = angular.copy($scope.person);
	};

	// $scope.reset();
	
}]);

document.body.innerHTML = template;

angular.bootstrap( document, [ app.name ], {
	
});

