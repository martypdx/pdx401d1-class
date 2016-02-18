import './css/main.css';
import angular from 'angular';
import angularAnimate from 'angular-animate';
import template from './app.html';
import filters from './filters';
import components from './components';

const app = angular.module( 'myApp', [
	angularAnimate,
	filters,
	components
]);

app.controller( 'AppCtrl', [ '$scope', '$timeout', function( $scope, $timeout ){
	$scope.created = new Date();
	$scope.dateFormats = { yearly: {}, monthly: { format: 'MM' } };
	$scope.dateFormat = $scope.dateFormats.monthly;
	
	$timeout( function(){
		$scope.dateFormats.yearly.format = 'YYYY';
	}, 3000 );
	
	$scope.person = {
		name: 'Sarah Joe',
		age: 14,
		toy: 'airplane'
	};
	
	$scope.update = function(person){
		$scope.person = person;
	};
}]);



document.body.innerHTML = template;

angular.bootstrap( document, [ app.name ], {
	
});

