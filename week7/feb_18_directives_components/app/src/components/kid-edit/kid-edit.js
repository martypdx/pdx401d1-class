import template from './kid-edit.html';

export default function( ngModule ) {
	ngModule.directive( 'kidEdit', function(){
		return {
			replace: true,
			restrict: 'E',
			// template: `
			// 	<div>
			// 		<span>hello {{person.name}}</span>
			// 		<input ng-model='person.name'>
			// 	</div>
			// `,
			template,
			scope: {
				person: '=',
				saved: '&'
			},
			controllerAs: 'kid',			
			controller: [ '$scope', function( $scope ){
				
				$scope.reset = function() {
					$scope.editPerson = angular.copy($scope.person);
				};

				$scope.reset();
				
				$scope.updated = function(){
					$scope.saved({ person: angular.copy($scope.editPerson) });
				};
				
			}]
		};
	});
}