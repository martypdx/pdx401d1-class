import template from './form-control.html';
import errorDict from './error-dictionary';

export default function( ngModule ) {
	ngModule.directive( 'formControl', function(){
		return {
			replace: true,
			restrict: 'E',
			transclude: true,
			// transclude: {
			// 	control: 'input',
			// 	errors: '?errors'
			// },
			template,
			scope: {
				label: '@',
				field: '='
			},			
			controller: [ '$scope', function($scope){
				$scope.errors = errorDict;
			}]
		};
	});
}