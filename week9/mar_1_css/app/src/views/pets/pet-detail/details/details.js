import template from './details.html';

export default {
	template,
	controller: function( $scope, $stateParams ){
		$scope.type = $stateParams.petType;
	}
};