import content from './content';
import cool from 'cool-ascii-faces';
import './css/main.css';
import angular from 'angular';
import template from '!html!./app.html';

const app = angular.module( 'myApp', [] );

app.controller( 'AppCtrl', [ '$scope', function($scope){
	$scope.place = 'world';
}]);

document.body.innerHTML = template;

angular.bootstrap( document, [ app.name ], {
	
});
