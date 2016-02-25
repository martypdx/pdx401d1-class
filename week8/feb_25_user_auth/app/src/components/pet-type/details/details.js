import template from './details.html';

export default function( ngModule ) {
	ngModule.directive( 'petTypeDetails', function() {
		return {
			replace: true,
			restrict: 'E',
			template,
			scope: {
				type: '='
			},
			controller() {
			 // do stuff	
			}
		};
	});
}