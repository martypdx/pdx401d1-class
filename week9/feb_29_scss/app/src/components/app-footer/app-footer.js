import template from './app-footer.html';
import styles from './app-footer.scss';

console.log( 'styles', styles );

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