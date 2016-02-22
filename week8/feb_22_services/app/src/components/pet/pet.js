import angular from 'angular';
import template from './pet.html';
// import './pet.css';

export default function( ngModule ) {
	ngModule.directive( 'pet', function(){
		return {
			replace: true,
			restrict: 'E',
			template,		
			scope: {
				pet: '=',
				saved: '&',
				closed: '&'
			},
			controller: [ '$scope', '$http', function( $scope, $http ) {
				
				$http.get( 'http://localhost:3000/api/v1/stores' ).then( res => {
					$scope.stores = res.data;	
				});
				
				$scope.$watch( 'pet', pet => {
					$scope.reset();
				});
				
				$scope.pet = $scope.pet || {};
				
				$scope.reset = function(){
					$scope.edit = angular.copy( $scope.pet );	
				};
				
				$scope.submit = function(){
					$scope.saved( { pet: $scope.edit } );
				};
				
			}]
		};
	});
}