import template from './app-footer.html';
import styles from './app-footer.scss';

export default function( ngModule ) {
	ngModule.directive( 'appFooter', function() {
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