import template from './app.html';
import styles from './app.scss';


export default function( ngModule ) {
	ngModule.directive( 'app', function() {
		return {
			replace: true,
			restrict: 'E',
			template,
			controller() {
			 // do stuff	
			}
		};
	});
}