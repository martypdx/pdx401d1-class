import template from './app-header.html';
import styles from './app-header.scss';

export default function( ngModule ) {
	ngModule.directive( 'appHeader', function() {
		return {
			replace: true,
			restrict: 'E',
			template,
			controller( $scope ) {
			 	$scope.styles = styles;
			}
		};
	});
}